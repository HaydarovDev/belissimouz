import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiper from "./components/Swiper";
import ButtonSwitch from "./components/ButtonSwitch";
import Products from "./pages/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col">
        <Swiper />
        <ButtonSwitch />
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default App;
