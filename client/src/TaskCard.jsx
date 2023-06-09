import { BsCalendar2Minus, BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import EditTask from "./EditTask";
import { useState, useRef } from "react";

export default function TaskCard({ todo, completeTodo, deleteTodo, editTodo }) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  console.log(todo);
  return (
    <>
      <EditTask
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        open={open}
      />
      <div className="bg-primary shadow-[4.0px_8.0px_8.0px_rgba(64, 19, 102,0.88)] gap-2 min-w-fit p-5 m-3 flex flex-col  rounded-lg border-1 border-gray-400">
        <h1 className="text-white text-md font-bold">{todo.text}</h1>

        <h6 className="text-gray-400 text-sm">{todo.desc}</h6>
        <div className="flex gap-2 my-2">
          <span className="text-xs border font-semibold uppercase border-blue-700 bg-sky-200 text-blue-700 p-1 rounded-md">
            Project
          </span>
          <span className="text-xs border font-semibold border-pink-700 bg-pink-200 text-pink-700 p-1 rounded-md">
            Work
          </span>
        </div>
        <div className="text-sm flex gap-2 items-baseline text-main-text justify-between flex-row ">
          <span className="flex flex-row gap-2 items-baseline">
            <BsCalendar2Minus />
            25 may
          </span>
          <div className="flex flex-row gap-2">
            <FiEdit
              size={18}
              className="hover:text-[#643173] hover:cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <BsFillTrashFill
              size={18}
              className="hover:text-[#643173] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
