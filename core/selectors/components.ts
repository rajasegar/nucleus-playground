export const getSelectedComponent = (state) =>
  state.components.find((c) => c.id === state.selectedId);
