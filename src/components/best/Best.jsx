import React from "react";
import "./Best.scss";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Best = () => {
  return (
    <div className="best">
      <div className="bContainer">
        <div className="bText">
          <h1>We are the best; and you know why!</h1>
          <div className="bTextSec">
            <div className="bTextSecLog">
              <IoMdCheckmarkCircleOutline size={30} className="bIcon" />
              <p>Fast, quality work</p>
            </div>
            <p>
              Hand over your project to a talented freelancer in minutes and get
              long-lasting results. Our skilled experts deliver quickly without
              compromising quality.
            </p>
          </div>

          <div className="bTextSec">
            <div className="bTextSecLog">
              <IoMdCheckmarkCircleOutline size={30} className="bIcon" />
              <p>Stay within your budget</p>
            </div>
            <p>
              Find the right service for every price point with our
              project-based pricing. No hourly rates, no hidden fees.
            </p>
          </div>

          <div className="bTextSec">
            <div className="bTextSecLog">
              <IoMdCheckmarkCircleOutline size={30} className="bIcon" />
              <p>Pay with confidence</p>
            </div>
            <p>
              We offer upfront quotes so there are no surprises when it comes to
              payment. You only pay when you are happy with the final product.
            </p>
          </div>

          <div className="bTextSec">
            <div className="bTextSecLog">
              <IoMdCheckmarkCircleOutline size={30} className="bIcon" />
              <p>24/7 support</p>
            </div>
            <p>
              We know that technical issues can arise at any time. That is why
              our round-the-clock support team is available to help you anytime,
              anywhere. Count on us to be there for you when you need it most.
            </p>
          </div>
        </div>
        <div className="bImage">
          <img
            src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Best;
