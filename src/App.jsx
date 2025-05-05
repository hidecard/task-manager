import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider, useUser } from "./context/UserContext";

const RoleSwitcher = () => {
  const { role, setRole } = useUser();
  return (
    <div className="mb-4">
      <span className="mr-2">Current Role: <strong>{role}</strong></span>
      <button onClick={() => setRole(role === "user" ? "admin" : "user")} className="px-2 py-1 bg-gray-500 text-white rounded text-sm">Switch Role</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
          <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
          <RoleSwitcher />
          <TaskForm />
          <TaskList />
        </div>
      </UserProvider>
    </Provider>
  );
};

export default App;
