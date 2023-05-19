import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Todo from "./Todo";
import CreateTodoPopup from "./CreateTodoPopup";
import Tabs from './Tabs'
import Home from "./Home";
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom";

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false)
  const [newTodo, SetNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
    console.log(todos);
  }, []);

  const deleteTodo = async (id) => {
    const data = await fetch(API_BASE + "/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
    setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };
  const addTodo = async () => {
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
        console.log(data);
      })
      .catch((err) => console.error("Locha", err));
  };

  return (
    <div className="App">
      <Navbar/>
      {/* <div>
        <Toaster />
      </div>
    
      <h1 className="text-center text-2xl font-bold text-white">Todo List</h1>
      {open? <CreateTodoPopup handleClose={handleClose}/>:<></>}
  
<div className=" w-[100%] lg:w-[40%] lg:mx-auto">
<Tabs/></div> */}
      {/* <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
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
      </div> */}
        <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
