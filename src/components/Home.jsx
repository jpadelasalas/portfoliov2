import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="relative h-screen bg-hero bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <Header />
      <div className="relative z-10 flex justify-center items-center h-full w-full text-white text-4xl">
        To be displayed
      </div>
    </div>
  );
};

export default Home;
