import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import Best from "../../components/best/Best";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide />
      <Best />
    </div>
  );
};

export default Home;
