/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Project from "../../Components/Project/Project";
import Board_Member from "../../Components/Board_Member/Board_Member";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="w-[90%] mx-auto">
        <Services />
        <Project />
        <Board_Member />
      </div>
    </div>
  );
};

export default Home;
