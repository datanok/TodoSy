import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Datepicker from "react-tailwindcss-datepicker";

export default function EditTask({ cancelButtonRef, setOpen, open }) {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  let date = new Date();
  const isoDate = new Date(value.startDate).toISOString();

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[rgba(34,28,53,255)] text-left shadow-xl transition-all w-full m-2 md-[] ">
                <div className="bg-[rgba(34,28,53,255)] p-4">
                  <div className="">
                    <div className="">
                      <Dialog.Title
                        as="h3"
                        className="text-lg mt-3 font-bold leading-6 text-white"
                      >
                        Edit Task
                      </Dialog.Title>

                      <div className="mt-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-bold leading-6 text-[#9892ab]"
                        >
                          Title
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              className="block flex-1 border-0 bg-transparent p-2 text-[#9892ab] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                            />
                          </div>
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
                              name="username"
                              id="username"
                              autoComplete="username"
                              className="block flex-1 border-0 bg-transparent p-2 text-[#9892ab] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
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
                            popoverDirection="up"
                            minDate={date}
                            showShortcuts={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-3 flex  gap-2 justify-center  ">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-[#9892ab] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
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
