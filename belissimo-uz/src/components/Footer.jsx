import React from "react";
import logo from "../assets/images/logo_new.svg";
import click from "../assets/images/click-footer.svg";
import payme from "../assets/images/payme-footer.svg";
import uzcard from "../assets/images/uzcard-footer.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone, PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center py-10 justify-center bg-[#262a2c]">
      <div className="w-[75%] flex justify-between px-3 pb-7">
        <ul className="text-white">
          <li>
            <a href="">
              <img src={logo} alt="404" />
            </a>
          </li>
          <li className="mt-4 uppercase text-[12px] gilroy">
            Raqamga qo'ng'iroq qiling -{" "}
            <a href="tel:1174" className="hover:underline">
              1174
            </a>
          </li>
        </ul>
        <ul className="text-[hsla(0,0%,100%,.5)] flex flex-col gap-2">
          <li className="hover:underline hover:text-white duration-100">
            Biz haqimizda
          </li>
          <li className="hover:underline hover:text-white duration-100">
            Ommaviy oferta
          </li>{" "}
          <li className="hover:underline hover:text-white duration-100">
            Maxfiylik siyosati
          </li>
          <li className="hover:underline hover:text-white duration-100">
            Halol sertifikati
          </li>
          <li className="hover:underline hover:text-white duration-100">
            Restoranlar
          </li>
        </ul>
        <ul className="text-[hsla(0,0%,100%,.5)]">
          <li>Bizning ish o'rinlarimiz</li>
          <li>Franshiza</li>
        </ul>
        <ul className="grid grid-cols-2 gap-3 justify-items-center items-center">
          <img loading="lazy" width={80} height={0} src={payme} alt="payment" />
          <img
            loading="lazy"
            width={50}
            height={0}
            src={uzcard}
            alt="payment"
          />
          <img loading="lazy" width={80} height={0} src={click} alt="payment" />
        </ul>
        <ul className="text-white">
          <li>Bizni kuzatib boring</li>
          <li className="flex gap-2 text-2xl text-[hsla(0,0%,100%,.5)] justify-between  mt-3 ">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <PiTelegramLogoDuotone />
            </span>
          </li>
        </ul>
      </div>
      <div className="text-white mt-6">© 2016-2025 Bellissimo Pizza.</div>
    </footer>
  );
};

export default Footer;
