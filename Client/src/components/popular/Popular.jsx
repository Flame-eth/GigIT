import React from "react";
import "./Popular.scss";
import { BiMobileAlt } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsClipboard2Data } from "react-icons/bs";
import { MdOutlineDesignServices, MdSecurity } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Popular = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gigs");
    window.scrollTo(0, 0);
    console.log("scrolling");
  };

  return (
    <div className="popular">
      <div className="pContainer">
        <h1> You need it, we have the right hands!</h1>
        <div className="boxes">
          <div className="box" onClick={handleNavigate}>
            <TfiWorld size={50} className="icon" />
            <h1>Web Development</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <BiMobileAlt size={50} className="icon" />
            <h1>Mobile Development</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <SiHiveBlockchain size={50} className="icon" />
            <h1>Blockchain Development</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <BsDatabaseFillCheck size={50} className="icon" />
            <h1>Data Science</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <AiOutlineCloudServer size={50} className="icon" />
            <h1>Cloud Engineering</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <BsClipboard2Data size={50} className="icon" />
            <h1>Data Analysis</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <MdOutlineDesignServices size={50} className="icon" />
            <h1>UI/UX Design</h1>
          </div>
          <div className="box" onClick={handleNavigate}>
            <MdSecurity size={50} className="icon" />
            <h1>Cyber Security</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
