import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';
import { useState } from 'react';


function App() {
  const [todoInput, setTodoInput] = useState('');
  const todos = useSelector(state => state.todo.todos);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todoInput.trim() === '') return;
    dispatch(addTodo(todoInput));
    setTodoInput('');
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="text-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4 bg-gray-300 p-4">Redux To-do App</h1>

      <div className="mb-6">
        <input
          className="border rounded-md p-2 w-60"
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleRemove(todo.id)}
            className="cursor-pointer bg-white shadow p-3 rounded hover:bg-red-100"
            title="Click to remove"
          >
            {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
