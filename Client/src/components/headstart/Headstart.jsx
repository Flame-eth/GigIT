import React from "react";
import "./Headstart.scss";

const Headstart = () => {
  return (
    <div className="headstart">
      <div className="hContainer">
        <div className="hText">
          <h1>Get a head start with the perfect guide </h1>
        </div>
        <div className="hCards">
          <div className="hCard">
            <div className="hCardImg">
              <img
                src="https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="hCardText">
              <h2>Find the best talent for your needs</h2>
              <h3>
                A complete guide on identifying the best techie for your project
              </h3>
            </div>
          </div>

          <div className="hCard">
            <div className="hCardImg">
              <img
                src="https://media.istockphoto.com/id/1318198500/photo/defi-decentralized-finance.jpg?b=1&s=612x612&w=0&k=20&c=DPFCc4Fg601CTvcDqwt5K_nxl02C74_NG8xGGW8YLWw="
                alt=""
              />
            </div>
            <div className="hCardText">
              <h2>Getting started with Decentralization</h2>
              <h3>
                A beginner to expert guide on building a decentralized app
              </h3>
            </div>
          </div>

          <div className="hCard">
            <div className="hCardImg">
              <img
                src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="hCardText">
              <h2>Get started with your grand idea</h2>
              <h3>A practical guide on building a global a tech startup</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headstart;
