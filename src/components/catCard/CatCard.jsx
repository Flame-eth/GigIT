import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  console.log(item);
  return (
    <Link to="gigs">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="ccDesc"> {item.description} </span>
        <span className="ccTitle"> {item.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
