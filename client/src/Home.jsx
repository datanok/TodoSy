import TaskCard from "./TaskCard";
import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
export default function Home() {
  const containerRef = useRef(null);

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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-10">
        <div className="">
          <div className="flex flex-row justify-between">
            <h1 className="text-[#737579] text-lg mt-4 mx-6 font-bold">
              All tasks
            </h1>
            <span className=" flex flex-row mt-3 text-gray-300 gap-2 mr-2 md:hidden">
              <BsFillArrowLeftCircleFill size={28} onClick={scrollLeft} />
              <BsFillArrowRightCircleFill size={28} onClick={scrollRight} />
            </span>
          </div>

          <div
            className="flex overflow-x-auto flex-row md:flex-col gap-1"
            style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
            ref={containerRef}
          >
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
        <div className=" 4">
          <h1 className="text-[#737579] text-lg mt-4 mx-6 font-bold">
            Today's tasks
          </h1>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className=" ">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className="w-full border-l border-[#71417e]">
          <h1 className="text-[#737579] text-lg mt-4 mx-6 font-bold">
            Calendar
          </h1>
          <h3 className="ml-6 mt-6 text-gray-400">15 October</h3>
        </div>
      </div>
    </>
  );
}
