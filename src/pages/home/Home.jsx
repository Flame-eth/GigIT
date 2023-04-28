import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import Best from "../../components/best/Best";
import Popular from "../../components/popular/Popular";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide />
      <Best />
      <Popular />
    </div>
  );
};

export default Home;
