export const addTodo = (todo) => (dispatch, getState) => {
  const { todos } = getState();

  const hasTodo = todos.find((todo) => todo.todo === todo);
  if (!hasTodo && todo !== "")
    dispatch({ type: "ADD_TODO", payload: [{ id: todo, todo }, ...todos] });
};

export const removeTodo = (id) => (dispatch, getState) => {
  const { todos } = getState();

  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((todo) => todo.id !== id),
  });
};
