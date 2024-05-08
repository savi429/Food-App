import { useReducer, useState } from "react";

const AddTodo = ({ hadleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      hadleAddTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="p-2 rounded-lg border border-black"
      />
      <button
        onClick={addTodo}
        className="p-2 bg-slate-600 text-white rounded-sm"
      >
        Add
      </button>
    </div>
  );
};
const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div>
      {todos.map((t) => (
        <div>
          <input
            type="checkbox"
            value={t.title}
            checked={t.done}
            onChange={() => handleEditTodo({ ...t, done: true })}
          />
          <span>{t.title}</span>
          {/* <button onClick={handleEditTodo}>Edit</button> */}
          <button onClick={() => handleDeleteTodo(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const TodoApp = () => {
  const initialState = [
    { id: 0, title: "Savitha Task", done: true },
    { id: 2, title: "Rajani Task", done: false },
    { id: 3, title: "mom Task", done: false },
  ];
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "add_todo":
        let maxId = Math.max(...state.map((p) => p.id));
        return [...state, { id: maxId + 1, title: action.title, done: false }];
      case "edit_todo":
        return state.map((t) => (t.id === action.task.id ? action.task : t));
      case "delete_todo":
        return state.filter((todo) => todo.id !== action.taskId);
      default:
        return state;
    }
  }
  const handleEditTodo = (task) => {
    dispatch({ type: "edit_todo", task });
  };
  const handleDeleteTodo = (taskId) => {
    dispatch({ type: "delete_todo", taskId });
  };
  const hadleAddTodo = (todo) => {
    dispatch({ type: "add_todo", title: todo });
  };
  return (
    <div>
      <h1>My ToDo List</h1>
      <AddTodo hadleAddTodo={hadleAddTodo} />
      <TodoList
        todos={state}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
};
export default TodoApp;
