export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return action.payload;

    case "REMOVE_TODO":
      return action.payload;

    default:
      return state;
  }
};
