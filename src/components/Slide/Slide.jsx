import React from "react";
import "./Slide.scss";
import { Slider } from "infinite-react-carousel/lib";
import { cardData } from "../../asset/cardData";
import CatCard from "../catCard/CatCard";

const Slide = () => {
  return (
    <div className="slide">
      <div className="sContainer">
        <Slider slidesToShow={4} arrowsScroll={2}>
          {cardData.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
