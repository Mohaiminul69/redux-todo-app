import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, removeTodo } from "./store/actions/todoActions";

function App() {
  const [inputTodo, setTodo] = useState([]);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state);
  const inputRef = useRef();

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputTodo));
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Todo List App</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="Enter a Task"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            style={{
              width: 250,
              padding: 10,
              paddingLeft: 20,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              marginLeft: 20,
              fontSize: 15,
            }}
          >
            Go
          </button>
        </form>
        <ul className="todo-list">
          {todos &&
            todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <span className="todoText">{todo.todo}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  style={{
                    padding: 10,
                    borderRadius: 15,
                    border: "1px solid white",
                    color: "white",
                    background: "#E0353D",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
