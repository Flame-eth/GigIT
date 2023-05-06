import React, { useEffect, useState } from "react";
import "./Navbar.scss";

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import avatar from "../../asset/img/user-avatar.png";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(currentUser);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="link">
            <span className="text">GigIT</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="link mini-screen">
            About Us
          </Link>
          <Link to="/" className="link mini-screen">
            Explore
          </Link>
          <Link to="/" className="link mini-screen">
            Contact
          </Link>
          {!currentUser && (
            <Link to="/login" className="link">
              Sign In
            </Link>
          )}
          {!currentUser?.isSeller && (
            <Link className="link mini-screen">Become a Seller</Link>
          )}
          {!currentUser && (
            <button
              onClick={() => navigate("/register")}
              className={active ? "active-button" : ""}>
              Join
            </button>
          )}
          {currentUser && (
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="user">
              <img src={currentUser.img || avatar} alt="user" />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/myGigs" className="link">
                        My Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}

                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link to="/login" onClick={handleLogout} className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="navbar-menu">
            <span>Web Development</span>
            <span>Mobile Development</span>
            <span>Blockchain Development</span>
            <span>UI/UX Designing</span>
            <span>Technical Writing</span>
          </div>
        </>
      )}
      {dashboard && (
        <ul>
          <li>
            <Link to="/" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Contact
            </Link>
          </li>

          <li>
            {!currentUser?.isSeller && (
              <Link className="link">Become a Seller</Link>
            )}
          </li>
          <li>
            <Link to="/orders" className="link">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/messages" className="link">
              Messages
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout} className="link">
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
