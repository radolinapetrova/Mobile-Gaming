import React from "react";
import '../styles/Home.css'
import '../styles/App.css'
import title from "../resources/images/title-dark.png"
import capy from "../resources/images/capy.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

library.add(faGear);


const Home = () => {

  return (
    <div className="home-cont">
      <div className="home-title">
        <img src={title} className="titlePic1" alt="" />
      </div>
      <div className="home-capy">
        <img src={capy} className="capy-home-pic" alt="" />
      </div>
      <div className="home-buttons">
        <button type="button" className="button"> <Link to={"/levels"} className="link">START GAME</Link></button>
        <button type="button" className="button">LEADERBOARD</button>
        <button type="button" className="button">WEEKLY MISSIONS</button>
      </div>
      <div className="home-side-buttons">
        <button type="button" className="button side-btn"><Link to={"/settings"} className="link"><FontAwesomeIcon icon="fa-solid fa-gear" /> </Link></button>
        <button type="button" className="button side-btn">i  </button>
      </div>
    </div>

  )
}

export default Home