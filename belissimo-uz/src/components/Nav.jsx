import React, { useState } from "react";
import logo from "../assets/images/logo_new.svg";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import halal from "../assets/images/halal.webp";
import coin from "../assets/images/coin.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useRegion } from "../Context/SetRegion";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const counter = 0;

  const { region } = useRegion();

  return (
    <nav className="w-full py-3 justify-center items-center hidden lg:flex">
      <div className="w-[75%] sm:w-full md:w-full lg:w-[75%] px-3 flex justify-between">
        <ul className="flex items-center gap-4">
          <li>
            <a href="" className="flex items-center gap-4">
              <img src={logo} alt="" />
            </a>
          </li>
          <li className="flex gap-3 items-center">
            <p className="p-3 text-[#006f4c] bg-[#f4f4f4] rounded-[13px]">
              <HiLocationMarker size={20} />
            </p>
            <p>
              <span className="gilroy text-[#64748b] text-[13px]">Shahar:</span>
              <span
                className="hover:underline cursor-pointer text-[18px] flex items-center regular gap-1 text-[#006f4c]"
                onClick={() => setOpen(true)}
              >
                {region}
                <IoIosArrowDown />
              </span>
            </p>
          </li>
          <li className="flex justify-center gap-2 w-[180px] gilroy">
            <p className="p-3 text-[#006f4c] bg-[#f4f4f4] rounded-[13px]">
              <TbTruckDelivery size={20} />
            </p>
            <p className="text-[#3f3f3f] text-[10px]">
              35 daqiqa ichida tekin yetkazib beramiz yoki pitsa bepul
            </p>
          </li>
        </ul>
        <ul className="flex gap-4 items-center">
          <li>
            <img width={50} src={halal} alt="" />
          </li>
          <Link to={"login"}>
            <li className="flex items-center gap-1 border-l border-[#f4f4f4] pl-2 py-2">
              <img width={30} src={coin} alt="" />
              <span className="regular font-extrabold text-[18px]">
                {counter}
              </span>
            </li>
          </Link>
          <Link to={"login"}>
            <button className="bg-[#006f4c] text-[white] regular p-3 px-6 rounded-[50px]">
              Kirish
            </button>
          </Link>
        </ul>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Nav;
