import React, { createContext, useReducer } from "react";
import produce from "immer";
import { duplicateComponent, deleteComponent } from "~utils/recursive";
import { generateId } from "~utils/generateId";
import DEFAULT_PROPS from "~constants/defaultProps";

const ComponentsContext: any = createContext(null);

const DEFAULT_ID = "root";

const initialState = {
  components: {
    root: {
      id: DEFAULT_ID,
      parent: DEFAULT_ID,
      type: "Box",
      children: [],
      props: {},
    },
  },
  selectedId: DEFAULT_ID,
  showCode: false,
  showLayout: true,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      const { payload } = action;
      return produce(state, (draftState: any) => {
        const id = payload.testId || generateId();
        const { form, ...defaultProps } = DEFAULT_PROPS[payload.type] || {};
        draftState.selectedId = id;
        draftState.components[payload.parentName].children.push(id);
        draftState.components[id] = {
          id,
          props: defaultProps || {},
          children: [],
          type: payload.type,
          parent: payload.parentName,
          rootParentType: payload.rootParentType || payload.type,
        };
      });

    case "SELECT_COMPONENT":
      return {
        ...state,
        selectedId: action.id,
      };
    case "SELECT_BACKGROUND":
      return {
        ...state,
        selectedId: "root",
      };

    case "UPDATE_PROPS":
      return produce(state, (draftState: any) => {
        draftState.components[state.selectedId].props[action.name] =
          action.value;
      });

    case "RESET_PROPS":
      const componentId = state.selectedId;
      return produce(state, (draftState: any) => {
        const component = draftState.components[componentId];
        const { form, ...defaultProps } = DEFAULT_PROPS[component.type] || {};

        draftState.components[componentId].props = defaultProps || {};
      });

    case "UPDATE_SHOW_LAYOUT":
      return {
        ...state,
        showLayout: action.showLayout,
      };

    case "UPDATE_SHOW_CODE":
      return {
        ...state,
        showCode: action.showCode,
      };

    case "CLEAR_EDITOR":
      return initialState;

    case "COPY_COMPONENT":
      return produce(state, (draftState: any) => {
        const selectedComponent = draftState.components[draftState.selectedId];

        if (selectedComponent.id !== DEFAULT_ID) {
          const parentElement = draftState.components[selectedComponent.parent];

          const { newId, clonedComponents } = duplicateComponent(
            selectedComponent,
            draftState.components
          );

          draftState.components = {
            ...draftState.components,
            ...clonedComponents,
          };
          draftState.components[parentElement.id].children.push(newId);
        }
      });

    case "REMOVE_COMPONENT":
      if (state.selectedId === "root") {
        return state;
      }

      return produce(state, (draftState: any) => {
        let component = draftState.components[state.selectedId];

        // Remove self
        if (component && component.parent) {
          const children = draftState.components[
            component.parent
          ].children.filter((id: string) => id !== state.selectedId);

          draftState.components[component.parent].children = children;
        }

        draftState.selectedId = DEFAULT_ID;
        draftState.components = deleteComponent(
          component,
          draftState.components
        );
      });

    default:
      throw new Error();
  }
};

const ComponentsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ComponentsContext.Provider value={[state, dispatch]}>
      {children}
    </ComponentsContext.Provider>
  );
};

export { ComponentsContext, ComponentsProvider };
