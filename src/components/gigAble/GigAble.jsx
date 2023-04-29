import React from "react";
import "./GigAble.scss";
import ceo from "../../asset/img/ceo.png";

const GigAble = () => {
  return (
    <div className="gigAble">
      <div className="gContainer">
        <div className="gText">
          <p>
            Every idea is now possible, with <span>GigIT</span>
          </p>
          <button>Get Started</button>
        </div>
        <div className="gImg">
          <img src={ceo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GigAble;
