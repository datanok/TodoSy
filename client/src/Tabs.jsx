import React from "react";
import Todo from "./Todo";
import { useState , useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFillPlusCircleFill } from "react-icons/bs";
import CreateTodoPopup from "./CreateTodoPopup";


const Tabs = () => {
    const API_BASE = "http://localhost:3001";
    const [todos, setTodos] = useState([]);
    const [todayTodos,setTodayTodo] = useState([]);
    const [open, setOpen] = useState(false)
  const [newTodo, SetNewTodo] = useState("");
  const [showPopup,setshowPopup ]= useState(false)

  useEffect(() => {
    GetTodos();
    GetTodayTodos();
    console.log(todayTodos);
  }, []);

  const deleteTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
    setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };
  const addTodo = async () => {
    if(newTodo.length ===0){
      toast.error("Task cannot be empty");
      return
    }
    const data = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    }).then((res) => res.json());
    setTodos([...todos, data]);
    toast.success("Task Added!");
    SetNewTodo("");
  };

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
  };

  const editTodo = async (id, newText) => {
    console.log(id, newText);
    const data = await fetch(API_BASE + "/todo/edit/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
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

  const handleClose =() => {
    setOpen(false);
  }

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

  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    {open?(<CreateTodoPopup handleClose={handleClose}/>):(<></>)}
      <div className="flex flex-wrap">
        <div className="w-full bg-white rounded shadow">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                  (openTab === 1
                    ? "border-b-2 border-teal-600 text-teal-600"
                    : "")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All Tasks
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                  (openTab === 2
                    ? "border-b-2 border-teal-600 text-teal-600"
                    : "")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Todays Tasks
              </a>
            </li>
      
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-black font-bold">Your Tasks</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                onChange={(e) => SetNewTodo(e.target.value)}
                value={newTodo}
              />
              <button
                className="flex-no-shrink hover:text-teal-600"
                onClick={setOpen}
              >
                <BsFillPlusCircleFill />
              </button>
            </div>
          </div>
          <div>
            {todos.map((todo) => (
              <Todo
                todo={todo}
                key={todo._id}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </div>
        </div>
      </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
      
                <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-black font-bold">Your Tasks</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                onChange={(e) => SetNewTodo(e.target.value)}
                value={newTodo}
              />
              <button
                className="flex-no-shrink hover:text-teal-600"
                onClick={addTodo}
              >
                <BsFillPlusCircleFill />
              </button>
            </div>
          </div>
          <div>
            {todayTodos.map((todo) => (
              <Todo
                todo={todo}
                key={todo._id}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </div>
        </div>
  
                </div>
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs