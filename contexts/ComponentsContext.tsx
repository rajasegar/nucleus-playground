import React, { createContext, useContext, useReducer } from "react";
const ComponentsContext = createContext();

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
  selectedId: null,
  hoveredId: null,
  showCode: false,
  showLayout: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      const hash = Math.random().toString(36).replace("0.", "");
      const id = `comp-${hash}`;
      const newState = {
        ...state,
        selectedId: id,
      };
      action.component.id = id;
      newState.components[action.component.parent].children.push(id);
      newState.components[id] = action.component;
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
      const comp = state.components[state.selectedId];
      comp.props = action.component.props;

      return {
        ...state,
      };

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

    default:
      throw new Error();
  }
};

const ComponentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ComponentsContext.Provider value={[state, dispatch]}>
      {children}
    </ComponentsContext.Provider>
  );
};

export { ComponentsContext, ComponentsProvider };
