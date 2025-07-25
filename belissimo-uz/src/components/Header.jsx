import React, { memo, useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import uz from "../assets/images/uzFlag.svg";
import rus from "../assets/images/rusFlag.svg";
import { Link } from "react-router-dom";
import coin from "../assets/images/coin.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const counter = 0;

  return (
    <header className="flex w-full justify-center items-center ">
      <div className="bg-[#006f4c] w-full justify-between items-center p-2 flex sm:hidden">
        <div className="flex gap-2 items-center text-white regular">
          <img width={30} src={coin} alt="" />
          {counter}
        </div>
        <button className="flex items-center gap-2 bg-white p-1 px-2 cursor-pointer rounded-[50px]">
          <LuUserRound />
          Kirish
        </button>
      </div>
      <div className="hidden justify-between w-[75%] sm:w-full sm:hidden md:flex lg:w-[75%] items-center py-3 px-3 border-b-2 border-[#f4f4f4]">
        <ul className="flex gap-5">
          <li className="text-[#006f4c] regular">
            <Link
              to={"tel:1174"}
              className="flex gap-2 items-center font-extrabold"
            >
              <IoCall size={25} className="text-[#006f4c]" /> 1174
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="text-[#828282] text-[18px] gilroy">
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link to={""} className="text-[#828282] text-[18px] gilroy">
              Bo'sh ish o'rinlari
            </Link>
          </li>
        </ul>
        <div className="relative">
          <button
            onClick={() => setShow(!show)}
            aria-label="lang"
            className="flex items-center gap-1 cursor-pointer"
          >
            <img src={uz} width="25px" alt="" />
            Uz
            <IoIosArrowDown />
          </button>
          <button
            className={`transition-all duration-500 ease-in-out
          ${
            show
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
          bg-white shadow-lg rounded-xl top-10 p-2 cursor-pointer absolute`}
            aria-label="lang"
          >
            <Link to={""} className="flex items-center gap-1">
              <img src={rus} width="100px" alt="" />
              Uz
              <IoIosArrowDown />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
