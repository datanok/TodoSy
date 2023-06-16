import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Datepicker from "react-tailwindcss-datepicker";
import TagsField from "./TagsField";
import toast, { Toaster } from "react-hot-toast";

export default function CreateTask({
  cancelButtonRef,
  setshowPopup,
  showPopup,
  todos,
  setTodos,
  GetTodos,
}) {
  const API_BASE = "http://localhost:3001";
  const [newDesc, setNewDesc] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const [selectedColor, setSelectedColor] = useState("");
  const [tags, setTags] = useState([]);

  const [tag, setTag] = useState("");

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  let date = new Date();
  date.setDate(date.getDate() - 1);

  const isoDate = value.startDate
    ? new Date(value.startDate).toISOString()
    : "";

  const handleValueChange = (newValue) => {
    // console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSubmitbtnClick = () => {
    console.log(tags);
    if (tags && tags.length > 0) {
      addTodo(newTitle, value, tags, newDesc);
      setTags([]);
    } else {
      toast.error("Please add at least one tag");
    }
    setTags([]);
    setshowPopup(false);
  };

  const addTodo = async (newTodo, duedate, tags, newDesc) => {
    console.log("working");
    console.log(duedate, typeof duedate);

    // Convert duedate to a valid Date object
    const parsedDueDate = new Date(duedate.startDate);
    console.log(parsedDueDate, typeof parsedDueDate);

    const data = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        duedate: parsedDueDate.toISOString(), // Convert to ISO string format
        tags: tags,
        desc: newDesc,
      }),
    }).then((res) => res.json());

    console.log(data);
    setTodos([...todos, data]);
    toast.success("Task Added!");
  };

  return (
    <Transition.Root show={showPopup} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setshowPopup}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-800 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform bg-background overflow-auto rounded-lg text-left shadow-xl transition-all md:w-fit w-full m-2">
                <div className="bg-background h-fit p-4">
                  <div className="md:px-4 md:ml-3">
                    <div className="">
                      <Dialog.Title
                        as="h3"
                        className="text-lg mt-3 font-bold leading-6 text-white"
                      >
                        Add Task
                      </Dialog.Title>

                      <div className="mt-4 md:w-[470px]">
                        <label
                          htmlFor="username"
                          className="block text-sm font-bold leading-6 text-[#9892ab]"
                        >
                          Title
                        </label>

                        <div className="mt-2 flex w-fill rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            onChange={(Event) =>
                              setNewTitle(Event.target.value)
                            }
                            autoComplete="text"
                            placeholder="Enter Title"
                            className="block flex-1 border-0 bg-transparent p-2 text-[#9892ab] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="mt-2 relative z-30">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-[#9892ab]"
                        >
                          Select Date
                        </label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md z-20">
                          <Datepicker
                            useRange={false}
                            asSingle={true}
                            value={value}
                            onChange={handleValueChange}
                            popoverDirection="down"
                            minDate={date}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-[#9892ab]"
                        >
                          Description
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <textarea
                              type="text"
                              onChange={(Event) =>
                                setNewDesc(Event.target.value)
                              }
                              className="block flex-1 border-0 bg-transparent p-2 text-[#9892ab] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="Enter Description"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-[#9892ab]"
                        >
                          Tags
                        </label>
                        <TagsField
                          selectedColor={selectedColor}
                          setSelectedColor={setSelectedColor}
                          tags={tags}
                          setTags={setTags}
                          tag={tag}
                          setTag={setTag}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-3 flex  gap-2 justify-center  ">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-[#9892ab] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setshowPopup(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-cyanprimary px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => handleSubmitbtnClick()}
                  >
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
