import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

export default function Todo({ todo, completeTodo, deleteTodo, editTodo }) {
  const [isEditing, SetisEditing] = useState(false);
  const [editedText, SeteditedText] = useState(todo.text);

  const handleChange = (e) => {
    SeteditedText(e.target.value);
  };

  const handleEditbtnClick = () => {
    SetisEditing(true);
  };
  const handleCancelbtnClick = () => {
    SetisEditing(false);
    SeteditedText(todo.text);
  };
  const handleSubmitbtnClick = () => {
    editTodo(todo._id, editedText);
    SetisEditing(false);
  };
  return (
    <>
      {isEditing ? (
        <div className="flex mb-4 items-center border-teal-400 shadow appearance-none border-2 rounded p-2">
          <input
            className={`w-full text-green focus:outline-none  active:border-0`}
            onChange={handleChange}
            value={editedText}
            required
          />

          <button
            className="bg-red-500 hover:bg-blue-400 mr-2 text-sm text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleCancelbtnClick}
          >
            Cancel
          </button>
          <button
            className="bg-teal-700 hover:bg-green-400 text-sm text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleSubmitbtnClick}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="flex mb-4 items-center shadow appearance-none border rounded p-2">
          {" "}
          <button className="flex-no-shrink p-1  mr-2 text-grey ">
            <AiFillCheckCircle
              onClick={() => completeTodo(todo._id)}
              className={todo.complete ? "text-green-400 " : ""}
            />
          </button>
          <input
            className={`w-full ${
              todo.complete ? "line-through" : ""
            } text-green focus:outline-none`}
            value={todo.text}
            readOnly
          />
          <button
            className="flex-no-shrink p-1  mr-2 text-grey "
            onClick={handleEditbtnClick}
          >
            <FiEdit fontSize={18} className="hover:text-blue-500" />
          </button>
          <button
            className="flex-no-shrink p-1  mr-2 text-grey "
            onClick={() => deleteTodo(todo._id)}
          >
            <BsFillTrashFill fontSize={18} className="hover:text-red-600" />
          </button>
        </div>
      )}
    </>
  );
}
