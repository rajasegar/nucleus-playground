import React, { createContext, useContext, useReducer } from "react";
const ComponentsContext = createContext();

const initialState = {
  components: [],
  selectedId: null,
  showCode: false,
  showLayout: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      return {
        ...state,
        components: [...state.components, action.component],
        selectedId: action.selectedId,
      };
    case "SELECT_COMPONENT":
      return {
        ...state,
        selectedId: action.selectedId,
      };
    case "SELECT_ROOT":
      return {
        ...state,
        selectedId: "root",
      };

    case "UPDATE_PROPS":
      console.log(action.component);
      const comp = state.components.find((c) => c.id === state.selectedId);
      comp.props = action.component.props;

      return {
        ...state,
        selectedId: action.selectedId,
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

const useComponents = () => useContext(ComponentsContext);

export { ComponentsContext, ComponentsProvider, useComponents };
