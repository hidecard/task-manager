import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="border p-4 rounded shadow mb-3">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-700">{task.desc}</p>
      <button onClick={() => dispatch(deleteTask(task.id))} className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">Delete</button>
    </div>
  );
};

export default TaskCard;