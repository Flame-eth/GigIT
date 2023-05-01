import React from "react";
import "./Footer.scss";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="fContainer">
        <div className="fTop">
          <div className="section">
            <h1> Categories </h1>
            <ul>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Game Development</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Cloud Computing</li>
              <li>DevOps</li>
              <li>Data Science</li>
              <li>Blockchain Development</li>
            </ul>
          </div>
          <div className="section">
            <h1>About</h1>
            <ul>
              <li>About Us</li>
              <li>Partnerships</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Press and News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="section">
            <h1>Community</h1>
            <ul>
              <li>Forum</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Meetups</li>
              <li>Events</li>
              <li>Newsletter</li>
              <li>Influencer</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>
        <div className="fBottom">
          <div className="fLogo">
            <h1 onClick={handleNavigate}>GigIT</h1>
            <h2>©GigIT International Ltd. 2023 </h2>
          </div>
          <div className="fSocial">
            <SlSocialLinkedin size={30} className="socialIcons" />
            <SlSocialTwitter size={30} className="socialIcons" />
            <SlSocialFacebook size={30} className="socialIcons" />
            <SlSocialInstagram size={30} className="socialIcons" />
            <SlSocialYoutube size={30} className="socialIcons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
