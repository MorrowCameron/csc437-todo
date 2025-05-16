import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodoItem = ({ id, name = "Eat", completed = false, onDelete }) => {
    const [isChecked, setIsChecked] = useState(completed);

    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <li className="flex gap-4 items-center">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />{" "}
                {name}
            </label>
            <button type="button" onClick={onDelete}>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="text-gray-500"
                    title="Delete task"
                />
            </button>
        </li>
    );
};

export default TodoItem;