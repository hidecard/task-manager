import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title) return;
    dispatch(addTask({ id: Date.now(), title, desc }));
    setTitle("");
    setDesc("");
  };

  return (
    <div className="mb-4">
      <input className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Task</button>
    </div>
  );
};

export default TaskForm;