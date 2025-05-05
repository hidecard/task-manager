import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return; // Prevent adding empty todos
    const todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    dispatch(addTodo(todo)); // Dispatch to Redux store
    setTodos([...todos, todo]); // Update local state
    setNewTodo(''); // Clear input
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo"
        className="w-full p-2 mb-2 border rounded text-black"
      />
      <button
        onClick={handleAddTodo}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Add Todo
      </button>
      <div className="mt-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;