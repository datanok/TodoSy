import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFillPlusCircleFill } from "react-icons/bs";
import CreateTask from "./CreateTask";

import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Home() {
  const containerRef = useRef(null);
  const [selectedTag, setSelectedTag] = useState("");

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 330, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };
  const API_BASE = "http://localhost:3001";
  const [todos, setTodos] = useState([]);
  const [todayTodos, setTodayTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTodo, SetNewTodo] = useState("");
  const [showPopup, setshowPopup] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    GetTodos();
    GetTodayTodos();
  }, []);
  const completedTodos = todos.filter((todo) => todo.complete);
  console.log(completedTodos);

  const completeTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/complete/" + id).then((res) =>
      res.json()
    );
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }
        return todo;
      })
    );
    toast.success("Task Marked as Completed!");
    GetTodayTodos();
  };
  const deleteTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
    setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };
  const editTodo = async (id, newTitle, newDesc) => {
    console.log(id, newTitle);
    const data = await fetch(API_BASE + "/todo/edit/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTitle, desc: newDesc }),
    }).then((res) => res.json());

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.text = data.text;
        }
        return todo;
      })
    );

    toast.success("Task Updated!");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAdd = () => {
    setshowPopup(false);
  };
  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json()) // return the parsed JSON response
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.error("Locha", err));
  };

  const GetTodayTodos = () => {
    fetch(API_BASE + "/todays-todos")
      .then((res) => res.json()) // return the parsed JSON response
      .then((data) => {
        setTodayTodo(data);
        console.log(data);
      })
      .catch((err) => console.error("Locha", err));
  };

  return (
    <>
      <Toaster />
      <CreateTask
        setshowPopup={setshowPopup}
        cancelButtonRef={cancelButtonRef}
        showPopup={showPopup}
        editTodo={editTodo}
        setTodos={setTodos}
        GetTodos={GetTodos}
        todos={todos}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
        <div className="col-span-2">
          <div className="flex flex-row justify-end mr-4">
            <span
              className="bg-gray-300 hover:bg-cyanprimary hover:cursor-pointer text-md p-1 rounded-lg "
              onClick={() => setshowPopup(true)}
            >
              Add Task
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="">
              <div className="flex flex-row justify-between">
                <h1 className="text-white text-lg mt-4 mx-6 font-bold">
                  All tasks
                </h1>
                <span className=" flex flex-row mt-3 text-gray-300 gap-2 mr-2 md:hidden">
                  <BsFillArrowLeftCircleFill size={28} onClick={scrollLeft} />
                  <BsFillArrowRightCircleFill size={28} onClick={scrollRight} />
                </span>
              </div>

              <div
                className="flex overflow-x-auto flex-row md:flex-col gap-1"
                style={{
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
                ref={containerRef}
              >
                {todos.map((todo) => (
                  <TaskCard
                    todo={todo}
                    key={todo._id}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    setOpen={setOpen}
                    setTodos={setTodos}
                    GetTodos={GetTodos}
                  />
                ))}
              </div>
            </div>
            <div className=" 4">
              <h1 className="text-white text-lg mt-4 mx-6 font-bold">
                Today's tasks
              </h1>
              <div
                className="flex overflow-x-auto flex-row md:flex-col gap-1"
                style={{
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
                ref={containerRef}
              >
                {todayTodos.map((todo) => (
                  <TaskCard
                    setTodos={setTodos}
                    todo={todo}
                    key={todo._id}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    GetTodos={GetTodos}
                  />
                ))}
              </div>
            </div>
            <div className=" ">
              <h1 className="text-white text-lg mt-4 mx-6 font-bold">
                Completed tasks
              </h1>
              <div
                className="flex overflow-x-auto flex-row md:flex-col gap-1"
                style={{
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
                ref={containerRef}
              >
                {completedTodos.map((todo) => (
                  <TaskCard
                    todo={todo}
                    key={todo._id}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    setTodos={setTodos}
                    GetTodos={GetTodos}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 border-l border-[#71417e]">
          <h1 className="text-white text-lg mt-4 mx-6 font-bold">Calendar</h1>
          <h3 className="ml-6 mt-6 text-gray-400">15 October</h3>
        </div>
      </div>
    </>
  );
}
