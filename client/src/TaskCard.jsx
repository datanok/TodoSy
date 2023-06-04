import { BsCalendar2Minus, BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
export default function TaskCard() {
  return (
    <div className="bg-[rgba(29,31,28,255)] shadow-[4.0px_8.0px_8.0px_rgba(64, 19, 102,0.88)] gap-0 min-w-[80%] p-2 m-3 flex flex-col  rounded-lg border-1 border-gray-400">
      <h1 className="text-text-head text-md font-bold">Upcoming Project</h1>

      {/* <h6 className="text-gray-300 text-sm">
        Show email, company name, full name, date of birth,Show email, company
        name, full name, date of birth,Show email, company name, full name, date
        of birth
      </h6> */}
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
          />
          <BsFillTrashFill
            size={18}
            className="hover:text-[#643173] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
