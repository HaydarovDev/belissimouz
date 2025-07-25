import React from "react";
import logo from "../assets/images/logo_new.svg";
import click from "../assets/images/click-footer.svg";
import payme from "../assets/images/payme-footer.svg";
import uzcard from "../assets/images/uzcard-footer.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center py-10 justify-center bg-[#262a2c]">
      <div className="w-[90%] grid gap-8 px-3 pb-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <ul className="text-white">
          <li>
            <a href="#">
              <img src={logo} alt="404" />
            </a>
          </li>
          <li className="mt-4 uppercase text-[12px] gilroy">
            Raqamga qo'ng'iroq qiling -{" "}
            <a href="tel:1174" className="hover:underline transition">
              1174
            </a>
          </li>
        </ul>

        <ul className="text-[hsla(0,0%,100%,.5)] flex flex-col gap-2">
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Biz haqimizda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Ommaviy oferta
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Maxfiylik siyosati
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Halol sertifikati
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Restoranlar
            </a>
          </li>
        </ul>

        <ul className="text-[hsla(0,0%,100%,.5)] flex flex-col gap-2">
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Bizning ish o'rinlarimiz
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-white transition duration-100"
            >
              Franshiza
            </a>
          </li>
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
          <li className="flex gap-2 text-2xl text-[hsla(0,0%,100%,.5)] justify-between mt-3">
            <a href="#" className="hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <PiTelegramLogoDuotone />
            </a>
          </li>
        </ul>
      </div>

      <div className="text-white mt-6">© 2016-2025 Bellissimo Pizza.</div>
    </footer>
  );
};

export default Footer;
