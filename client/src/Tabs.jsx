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
    {open?(<CreateTodoPopup handleClose={handleClose} setTodos={setTodos} todos={todos} setOpen={setOpen}/>):(<></>)}
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
    
            <div className="flex mt-2">
           
            
            <button
                
                onClick={setOpen}
                class="w-full text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Task
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
     
            <div className="flex mt-2">
           
            <button
                
                onClick={setOpen}
                class="w-full text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Task
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