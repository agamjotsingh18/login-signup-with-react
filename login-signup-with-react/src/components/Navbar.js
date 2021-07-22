import React, { useState } from "react";
import "./navbar.css";
import {
  FaPlay,
  FaCameraRetro,
  FaVideo,
  FaMicrophoneAlt,
  FaRegCommentAlt
} from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <img src={logo} alt="Logo" className="logo" width="200px"/>;   
         {/* <h2>
            <span>T</span>hapa
            <span>T</span>echnical
          </h2> */}
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul >
            <li>
              <NavLink to="/"><FaPlay className="icons" /></NavLink>
            </li>
            <li>
              <NavLink to="/"><FaCameraRetro className="icons" /></NavLink>
            </li>
            <li>
              <NavLink to="/"><FaVideo className="icons" /></NavLink>
            </li>
            <li>
              <NavLink to="/"><FaMicrophoneAlt className="icons" /></NavLink>
            </li>
          
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
            <NavLink to="/"><IoMdChatbubbles className="icons" /></NavLink>
{/* 
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a> */}
            </li>
            {/* <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li> */}
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;