import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import Best from "../../components/best/Best";
import Popular from "../../components/popular/Popular";
import Testimonial from "../../components/testimonial/Testimonial";
import Headstart from "../../components/headstart/Headstart";
import GigAble from "../../components/gigAble/GigAble";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide />
      <Best />
      <Popular />
      <Testimonial />
      <Headstart />
      <GigAble />
    </div>
  );
};

export default Home;
