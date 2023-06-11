import notepad from "./notepad.svg";
export default function sidebar() {
  return (
    <>
      <aside className="bg-white w-fit h-screen border-r-2 border-gray-200">
        <div className="flex flex-col">
          <div className="mx-auto my-2">
            <a
              href="asda.com"
              className=" text-lg font-extrabold text-main-text "
            >
              TodoSy
            </a>
          </div>

          <div className="mt-2">
            <div className="py-4 bg-orange-100 border-r-4 border-orange-600  px-8">
              <span className="text-sm uppercase text-main-text ">
                Dashboard
              </span>
            </div>
            <div className="py-4  px-8 ">
              <span className=" text-sm uppercase text-main-text  ">Today</span>
            </div>
            <div className="py-4  px-8 ">
              <span className=" text-sm uppercase text-main-text  ">Today</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
