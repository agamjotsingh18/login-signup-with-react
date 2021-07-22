import React, { useState } from "react"
import { Card, Button, Alert, Container} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Navbar from "./Navbar"
import lo from "./pn.jpg"
import {
  FaPlay
} from "react-icons/fa";
import { AiFillPicture, AiFillVideoCamera, AiFillLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiGalleryUploadFill,RiHistoryLine, RiPlayListFill, RiSettings2Fill } from "react-icons/ri";
import { MdLocalMovies,MdLiveTv, MdFavorite, } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { VscFeedback, VscChevronDown } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// import {
//   Nav,
//   NavLink,
//   // Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <Navbar/>
       <Container className="cont">
        <section className="leftt">
          <div>
            <span>
            <NavLink to="/"><RiGalleryUploadFill className="upload" /></NavLink>
            <span className="uploa">
              Upload
            </span>
          </span>
            <ul>
              <li><span>
            <NavLink to="/"><AiFillPicture className="phot" /></NavLink>
            <span className="uploa">
            Photo
            </span>
          </span></li>
              <li><span>
            <NavLink to="/"><AiFillVideoCamera className="phote" /></NavLink>
            <span className="uploa">
            PVideo
            </span>
          </span></li>
              <li><span>
            <NavLink to="/"><MdLocalMovies className="photee" /></NavLink>
            <span className="uploa">
            Clip
            </span>
          </span></li>
              <li><span>
            <NavLink to="/"><RiHistoryLine className="photeee" /></NavLink>
            <span className="uploa">
           Story
            </span>
          </span></li>
            
            </ul>
            <div>
            <NavLink to="/"><MdLiveTv className="upload1" /></NavLink>
            <span className="uploa">
              Go Live
            </span>
          </div>

          <div>
            <NavLink to="/"><MdFavorite className="upload2" /></NavLink>
            <span className="uploa">
              Favorites
            </span>
          </div>
          <div>
            <NavLink to="/"><AiFillLike className="upload3" /></NavLink>
            <span className="uploa">
              Liked
            </span>
          </div>
          <div>
            <NavLink to="/"><RiPlayListFill className="upload4" /></NavLink>
            <span className="uploa">
              Playlists
            </span>
          </div>
          &nbsp;
          <div>
            <NavLink to="/"><VscFeedback className="upload11" /></NavLink>
            <span className="uploa">
              Feedback
            </span>
          </div>
          <div>
            <NavLink to="/"><RiSettings2Fill className="upload12" /></NavLink>
            <span className="uploa">
              Settings
            </span>
          </div>
          <div>
          <div className="w-100 text-center mt-3">
            <Link to="/login" className="forgot">Log Out</Link>
          </div>
            {/* <NavLink to="/"><IoMdLogOut className="upload13" /></NavLink>
            <span className="uploa">
              Log Out
            </span> */}
          </div>
          </div>
        </section>
        <section className="center">
            <h2 style={{ textAlign: "center" }}>Welcome To Mitambi Soutions Home Page</h2>  
        </section>
        <section className="rightt">
        <div className="ri">
          <div>
            <span className="stories">
              Stories
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="images">
          <img src={lo} alt="Logo" className="logo" width="80px"/>;
          <img src={lo} alt="Logo" className="logo" width="80px"/>;
          <img src={lo} alt="Logo" className="logo" width="80px"/>;
          <img src={lo} alt="Logo" className="logo" width="80px"/>;
          </div>
          <span className="down"> <NavLink to="/"><VscChevronDown className="dot" /></NavLink></span>
          <div>
            <span className="stories">
              Chats
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          <div className="chats">
            <span className="chit">
              <span>
                <img src={lo} alt="Logo" className="logo" width="30px"/>
              </span>
              <span className="head">
                Mitambi User
              </span>
            </span>
            <span className="dots"> <NavLink to="/"><BsThreeDots className="dot" /></NavLink></span>
          </div>
          </div>
        </section>
       </Container>
    </>
  )
}