import TodoItem from "./components/TodoItem";
import AddTaskForm from "./components/AddTaskForm.tsx";
import Modal from "./components/Modal";
import { nanoid } from "nanoid";

import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        { id: "1", name: "Eat", completed: false },
        { id: "2", name: "Sleep", completed: false },
        { id: "3", name: "Repeat", completed: false }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    function addTask(name: string) {
        const newTask = {id: `todo-${nanoid()}`, name, completed: false};
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setIsModalOpen(false);
    }

    function deleteTask(id: string) {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    }

    return (
        <main className="m-4">
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setIsModalOpen(true)}
            >
                New Task
            </button>

            <section>
                <h1 className="text-xl font-bold">To do</h1>
                <ul className='flex flex-col gap-2 mt-2'>
                    {tasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            completed={task.completed}
                            onDelete={() => deleteTask(task.id)}
                        />
                    ))}
                </ul>
            </section>
            <button onClick={() => setTasks([])} className="p-1 bg-red-600 text-white">Delete all</button>
            <Modal headerLabel="Add new task" open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddTaskForm onNewTask={addTask} />
            </Modal>
        </main>
    );
}

export default App;