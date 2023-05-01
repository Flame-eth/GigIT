import React from "react";
import "./Featured.scss";
import { RiUserSearchFill } from "react-icons/ri";
import techie from "../../asset/img/techie.png";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();

  return (
    <div className="featured">
      <div className="featured-container">
        <div className="fLeft">
          <h1 className="fLeft-text">
            Find the perfect <span> techie </span> for your project
          </h1>
          <div className="fSearch">
            <input type="text" placeholder="Try Blockchain Development " />
            {/* <button>Search</button> */}
            <RiUserSearchFill
              onClick={() => navigate("/gigs")}
              color="#2e0249"
              className="fSearchIcon"
            />
          </div>
          <div className="demand">
            <span>Popular:</span>
            <button>Web Development</button>
            <button>Blockchain Development</button>
            <button>Cloud Engineering</button>
            <button>Mobile Development</button>
          </div>
        </div>
        <div className="fRight">
          <img src={techie} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
