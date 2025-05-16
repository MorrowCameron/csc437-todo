import { useState } from "react";

const AddTaskForm = ({ onNewTask }) => {
    const [input, setInput] = useState("");

    const handleAddTask = () => {
        if (input.trim() === "") return;
        onNewTask(input.trim());
        setInput("");
    };

    return (
        <div className="mb-4 flex items-center gap-2">
            <input
                placeholder="New task name"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleAddTask}
            >
                Add task
            </button>
        </div>
    );
};

export default AddTaskForm;