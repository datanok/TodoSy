import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
export default function TagsField({
  selectedColor,
  setSelectedColor,
  tags,
  setTags,
  tag,
  setTag,
}) {
  const tagColors = [
    { name: "Green", color: "#C5E1A5" },
    { name: "Pink", color: "#FBEAFF" },
    { name: "Red", color: "#EF9A9A" },
    { name: "Yellow", color: "#FFF59D" },
    { name: "Brown", color: "#BCAAA4" },
    // Add more colors as needed
  ];

  const addTag = (color, tagName) => {
    const newTag = { name: tagName, color: color };
    setTags((prevTags) => [...prevTags, newTag]);
    setTag("");
  };

  const removeTag = (tagName) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.name !== tagName));
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          <div className=" col-span-2 flex w-fill rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="Tag"
              value={tag}
              onChange={(Event) => setTag(Event.target.value)}
              className="flex-1 border-0 bg-transparent p-2 text-[#9892ab] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Tag"
            />
          </div>
          <div className=" col-span-1">
            <button
              className="p-2 bg-cyanprimary rounded-lg"
              onClick={() => addTag(selectedColor, tag)}
            >
              Add
            </button>
          </div>
        </div>
        <label
          htmlFor="tagColor"
          className="block text-sm my-2 font-medium text-[#9892ab]"
        >
          Select Color
        </label>
        <div className=" mb-2">
          {tagColors.map((colorOption) => (
            <label
              key={colorOption.name}
              className="inline-flex items-center mr-4"
            >
              <input
                type="radio"
                name="tagColor"
                value={colorOption.color}
                className="hidden peer"
                checked={selectedColor === colorOption.color}
                onChange={() => handleColorSelection(colorOption.color)}
              />
              <div
                style={{ backgroundColor: colorOption.color }}
                className={`inline-flex items-center justify-between w-fit h-6 p-1 rounded-md cursor-pointer ${
                  selectedColor === colorOption.color
                    ? "border-4 border-blue-500"
                    : ""
                }`}
              >
                demo
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <div className="p-2 flex flex-row gap-2">
          {tags.map((tag) => (
            <span
              style={{ backgroundColor: tag.color }}
              onClick={() => removeTag(tag.name)}
              className="text-xs text-black hover:font-extrabold  p-1 px-2 rounded-md flex gap-2 align-baseline hover:bg-[#CAE7EB] hover:text-black"
            >
              {tag.name} <RxCross2 className="mt-0.5 hover:cursor-pointer" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
