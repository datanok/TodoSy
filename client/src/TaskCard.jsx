import {
  BsCalendar2Minus,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import EditTask from "./EditTask";

import { useState, useRef } from "react";

export default function TaskCard({
  setTodos,
  todo,
  completeTodo,
  deleteTodo,
  editTodo,
  GetTodos,
}) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const date = new Date(todo.dueDate);
  let duedate = String(date).slice(3, 10);
  return (
    <>
      <EditTask
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        open={open}
        todo={todo}
        editTodo={editTodo}
        setTodos={setTodos}
        GetTodos={GetTodos}
      />
      <div className="slide-br bg-primary shadow-[4.0px_8.0px_8.0px_rgba(64, 19, 102,0.88)] gap-2 min-w-[304px] p-5 m-3 flex flex-col  rounded-lg border-1 border-gray-400">
        <div className="flex flex-row justify-between">
          <h1 className="text-white text-md font-bold">{todo.text}</h1>

          {todo.complete ? (
            <BsFillCheckCircleFill
              className=" align-baseline"
              fill="#24d152"
              size={20}
              onClick={() => completeTodo(todo._id)}
            />
          ) : (
            <BsFillCheckCircleFill
              className=" align-baseline"
              fill="gray"
              size={20}
              onClick={() => completeTodo(todo._id)}
            />
          )}
        </div>

        <h6 className="text-gray-400 text-sm">{todo.desc}</h6>
        <div className="flex gap-2 my-2">
          {todo.tags.map((tag) => (
            <span
              className="text-xs border font-semibold uppercase p-1 rounded-md"
              style={{ backgroundColor: tag.color }}
            >
              {tag.tagName}
            </span>
          ))}
        </div>
        <div className="text-sm flex gap-2 items-baseline text-main-text justify-between flex-row ">
          <span className="flex flex-row gap-2 items-baseline">
            <BsCalendar2Minus />
            {duedate}
          </span>
          <div className="flex flex-row gap-2">
            <FiEdit
              size={18}
              className="hover:text-cyanprimary hover:cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <BsFillTrashFill
              size={18}
              className="hover:text-cyanprimary hover:cursor-pointer"
              onClick={() => deleteTodo(todo._id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
