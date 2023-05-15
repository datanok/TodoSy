import { Fragment, useRef, useState } from 'react'
import {BsCalendarWeek} from 'react-icons/bs'
import Datepicker from "react-tailwindcss-datepicker"; 

export default function CreateTodoPopup({handleClose}) {
    localStorage.theme = 'light'
    const [value, setValue] = useState({ 
        startDate: null ,
        endDate: null 
        }); 
        console.log(value.startDate)
        const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        } 
        
        

  return (
   

<>

<div tabindex="-1" aria-hidden="true" class=" absolute flex justify-center my-auto bg-black bg-opacity-60 items-center z-50  w-full  overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
    <div class="relative w-full max-w-md max-h-full">
  
        <div class="relative bg-white rounded-lg shadow">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={handleClose}>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 ">Add new Task</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Task</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required></input>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Select Duedate</label>
                        <Datepicker useRange={false} asSingle={true} value={value} onChange={handleValueChange} primaryColor='teal' showShortcuts={true}/> 
                    </div>
          
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                   
                </form>
            </div>
        </div>
    </div>
</div> 

</>

  )
}
