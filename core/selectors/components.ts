export const getSelectedComponent = (state) => state.components[state.selectedId]

export const getComponentBy = (state, nameOrId:string) => state.components[nameOrId]

export const getIsSelectedComponent = (state, componentId) => state.selectedId === componentId

export const getIsHovered = (state, id) => state.hoveredId === id


