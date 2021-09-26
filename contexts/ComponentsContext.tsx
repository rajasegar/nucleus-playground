import React, { createContext, useReducer } from "react";
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

function generateId() {
  const hash = Math.random().toString(36).replace("0.", "");
  return `comp-${hash}`;
}
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      const id = generateId();
      const newState = {
        ...state,
        selectedId: id,
      };
      const newComponent = { ...action.component, id };
      newState.components[newComponent.parent].children.push(id);
      newState.components[id] = newComponent;
      return newState;
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
      const comp = { ...state.components[state.selectedId] };
      comp.props[action.name] = action.value;
      state.components[state.selectedId] = comp;
      return state;

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
      const oldComponent = state.components[state.selectedId];
      const newId = generateId();
      const draftState = {
        ...state,
        selectedId: newId,
      };
      const destComponent = { ...oldComponent, id: newId };
      draftState.components[oldComponent.parent].children.push(newId);
      draftState.components[newId] = destComponent;
      return draftState;

    case "REMOVE_COMPONENT":
      delete state.components[state.selectedId];
      state.selectedId = DEFAULT_ID;
      return state;

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
