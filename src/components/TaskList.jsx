import { useSelector } from "react-redux";
import { useUser } from "../context/UserContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const { role } = useUser();

  const visibleTasks = role === "admin" ? tasks : tasks.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tasks ({role})</h2>
      {visibleTasks.map((t) => <TaskCard key={t.id} task={t} />)}
    </div>
  );
};

export default TaskList;