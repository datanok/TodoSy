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
            style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
            ref={containerRef}
          >
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
          <button onClick={scrollLeft}>Scroll Left</button>
          <button onClick={scrollRight}>Scroll Right</button>
        </div>
        <div className="  border-r-2 border-white">
          <h1 className="text-white text-lg mt-4 mx-6 font-bold">
            Today's tasks
          </h1>
          <TaskCard />
        </div>
        <div className=" border-r-2 border-white"></div>
      </div>
    </>
  );
}
