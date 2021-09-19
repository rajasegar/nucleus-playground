export const getSelectedComponent = (state: any) => state.components[state.selectedId]

export const getComponentBy = (state: any, nameOrId:string) => state.components[nameOrId]

export const getIsSelectedComponent = (state: any, componentId:string) => state.selectedId === componentId

export const getIsHovered = (state: any, id:string) => state.hoveredId === id


