import { useState, ChangeEvent, FC } from "react";

interface AddTaskFormProps {
    onNewTask: (taskName: string) => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ onNewTask }) => {
    const [input, setInput] = useState<string>("");

    const handleAddTask = () => {
        if (input.trim() === "") return;
        onNewTask(input.trim());
        setInput("");
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div className="mb-4 flex items-center gap-2">
            <input
                placeholder="New task name"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={input}
                onChange={handleInputChange}
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