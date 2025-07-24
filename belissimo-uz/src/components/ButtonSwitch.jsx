import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const ButtonSwitch = () => {
  const [active, setActive] = useState("a");

  return (
    <article className="w-full flex mt-4 justify-center px-3">
      <div className="flex w-[75%] justify-between">
        <div className="w-100 relative bg-gray-200 rounded-full p-1 flex">
          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow-md transition-all duration-300 ${
              active === "a" ? "left-1" : "left-49"
            }`}
          ></div>

          {/* Buttons */}
          <button
            onClick={() => setActive("a")}
            className={`z-10 w-1/2 py-2 rounded-full transition-colors duration-300 ${
              active === "a" ? "text-black" : "text-gray-500"
            }`}
          >
            Yetkazib berish
          </button>
          <button
            onClick={() => setActive("b")}
            className={`z-10 w-1/2 py-2 rounded-full transition-colors duration-300 ${
              active === "b" ? "text-black" : "text-gray-500"
            }`}
          >
            Olib ketish
          </button>
        </div>
        <div className="bg-[#FFFBEE] border-[#FFC600] text-[#FFC600] border-1 w-170 rounded-[10px] flex justify-between px-2 items-center">
          <p>
            {active === "b"
              ? "Filialni tanlang"
              : "Yetkazib berish manzilini tanlang"}
          </p>
          <FiEdit2 className="cursor-pointer" />
        </div>
      </div>
    </article>
  );
};

export default ButtonSwitch;
