import React, { useEffect, useState } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 1,
    userName: "Jane Doe",
    isSeller: true,
  };

  const { pathname } = useLocation();

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="link">
            <span className="text">GigIT</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="" className="link">
            About Us
          </Link>
          <Link to="" className="link">
            Explore
          </Link>
          <Link to="" className="link">
            Contact
          </Link>
          <Link to="" className="link">
            Sign In
          </Link>
          {!currentUser.isSeller && <Link>Become a Seller</Link>}
          {!currentUser && (
            <button className={active ? "active-button" : ""}>Join</button>
          )}
          {currentUser && (
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="user">
              <img
                src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user"
              />
              <span>{currentUser.userName}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/gigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}

                  <Link to="/orders" className="link">
                    Order
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link to="/login" className="link">
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
    </div>
  );
};

export default Navbar;
