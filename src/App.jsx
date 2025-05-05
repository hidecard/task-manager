import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './ThemeContext';

function App() {
  const [todos, setTodos] = useState([]);
  const { theme } = useTheme();
  const dispatch = useDispatch();

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
      // Sync with Redux store
      parsedTodos.forEach((todo) => dispatch(addTodo(todo)));
    }
  }, [dispatch]);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-4`}>
      <h1 className="text-3xl font-bold text-center mb-4">Todo List App</h1>
      <ThemeToggle />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;