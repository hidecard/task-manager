import { useDispatch } from 'react-redux';
import { deleteTodo } from '../todoSlice';

function TodoItem({ todo, setTodos }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // Dispatch deleteTodo action
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id)); // Update local state
  };

  // TODO: Implement toggle complete functionality (optional for students)
  const handleToggle = () => {
    // Dispatch toggleComplete action
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
      <div>
        <button onClick={handleToggle} className="mr-2 text-green-500">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;