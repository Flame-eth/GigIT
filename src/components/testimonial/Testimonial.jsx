import React from "react";
import "./testimonial.scss";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="tContainer">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/3974773/pexels-photo-3974773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="text">
          <div className="title">
            <h1> John Smith CEO, Tech Solutions Inc.</h1>
          </div>
          <div className="subtext">
            <h2>
              &quot; The platform was incredibly easy to use, and I was able to
              quickly find a skilled developer who matched our needs. The
              communication with the freelancer was seamless, and they delivered
              the project on time and within budget. &quot;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
