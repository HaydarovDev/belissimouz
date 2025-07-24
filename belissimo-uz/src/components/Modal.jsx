import React from "react";
import { useRegion } from "../Context/SetRegion";

const Modal = ({ open, onClose }) => {
  const { setRegion } = useRegion();

  if (!open) return null;

  const handleBack = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const regions = [
    "Toshkent",
    "Samarqand",
    "Andijon",
    "Qo'qon",
    "Chirchiq",
    "Namangan",
    "Buxoro",
    "Farg'ona",
    "Olmaliq",
    "Nurafshon",
    "Angren",
    "Yangiyul",
    "Qarshi",
    "Jizzax",
    "Guliston",
  ];

  const handleClick = (e) => {
    const selectRegion = e.target.textContent;
    setRegion(selectRegion);
    onClose();
  };

  return (
    <article
      className="bg-[rgba(0,0,0,0.7)] w-full h-[100vh] bottom-0 z-20 flex justify-center items-center fixed"
      onClick={handleBack}
    >
      <div className="w-[28%] bg-white rounded-2xl p-4">
        {regions.map((region, i) => {
          return (
            <ul key={i}>
              <li
                onClick={handleClick}
                className="hover:underline text-[18px] duration-100 my-[4px] gilroy cursor-pointer"
              >
                {region}
              </li>
            </ul>
          );
        })}
      </div>
    </article>
  );
};

export default Modal;
