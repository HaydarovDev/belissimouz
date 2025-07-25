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
    <article className="w-full my-5 flex px-3 justify-center flex-col items-center">
      <header className="flex w-full sm:w-full lg:w-[75%] justify-between">
        <ul className="flex gap-3 overflow-x-auto">
          {menuItems.map((items, i) => (
            <li
              key={i}
              className="px-[15px] py-[5px] bg-[#f4f4f4] rounded-[50px] hover:bg-[#CCE1DA] duration-100 cursor-pointer"
            >
              {items}
            </li>
          ))}
        </ul>
        <button className="bg-[#ff002b] py-1 text-white gilroy hover:px-4 duration-100 cursor-pointer rounded-full px-3 flex gap-2">
          <span className="border-r border-white pr-2">Savatcha</span>
          {counter}
        </button>
      </header>
      <main className="flex flex-col w-[75%] justify-center px-3">
        <h1 className="mt-2 regular text-[20px]">Kombo</h1>
        <div className="grid justify-center sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
          <div className="w-70 flex flex-col bg-white p-2 shadow-[5px_2px_30px_hsla(257,_8%,_83%,_0.3)] rounded-2xl my-3 hover:scale-102 duration-300 cursor-pointer">
            <img
              className="w-full"
              src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=1920&q=75"
              alt=""
              loading="lazy"
            />
            <h1 className="my-2 regular text-[20px]">Ishta-Ha! boksi</h1>
            <p className="text-[14px] gilroy">
              Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta
              ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!
            </p>
            <p className="regular text-[20px]">49,000 so'm</p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Products;
