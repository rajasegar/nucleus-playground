import React, { createContext, useContext, useReducer } from "react";
const ComponentsContext = createContext();

const initialState = {
    components:[],
    selectedId: null,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_COMPONENT':
            return {
                components: [...state.components, action.component],
                selectedId: action.selectedId
            };
        case 'SELECT_COMPONENT':
            return {
                selectedId: action.selectedId
            }

        case 'UPDATE_PROPS':
            console.log(action.component);
            const comp = state.components.find(c => c.id === state.selectedId)
            comp.props = action.component.props;

            return {
                components: [...state.components],
                selectedId: action.selectedId
            }

        default:
            throw new Error();
    }
    
};

const ComponentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ComponentsContext.Provider value={[ state, dispatch ]}>
      {children}
    </ComponentsContext.Provider>
  );
};

const useComponents = () => useContext(ComponentsContext);

export { ComponentsContext, ComponentsProvider, useComponents };
