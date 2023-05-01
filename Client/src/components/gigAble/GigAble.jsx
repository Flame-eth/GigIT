import React from "react";
import "./GigAble.scss";
import ceo from "../../asset/img/ceo.png";
import { useNavigate } from "react-router-dom";

const GigAble = () => {
  const navigate = useNavigate();

  return (
    <div className="gigAble">
      <div className="gContainer">
        <div className="gText">
          <p>
            Every idea is now possible, with <span>GigIT</span>
          </p>
          <button
            onClick={() => {
              navigate("/login");
              window.scrollTo(0, 0);
            }}>
            Get Started
          </button>
        </div>
        <div className="gImg">
          <img src={ceo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GigAble;
