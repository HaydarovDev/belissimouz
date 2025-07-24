import React from "react";

const Products = () => {
  const counter = 0;
  const menuItems = [
    "Kombo",
    "Pitsa",
    "Gazaklar",
    "Ichimliklar",
    "Salatlar",
    "Desertlar",
    "Souslar",
  ];

  return (
    <article className="w-full mt-5 flex px-3 justify-center items-center">
      <header className="flex w-[75%] justify-between items-center">
        <ul className="flex gap-3">
          {menuItems.map((items, i) => (
            <li
              key={i}
              className="px-[15px] py-[5px] bg-[#f4f4f4] rounded-[50px] hover:bg-[#CCE1DA] duration-100 cursor-pointer"
            >
              {items}
            </li>
          ))}
        </ul>
        <button>
          <span>Savatcha | {counter}</span>
        </button>
      </header>
    </article>
  );
};

export default Products;
