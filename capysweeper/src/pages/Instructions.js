import React from "react";
import "../styles/Instructions.css";
import "../styles/App.css";
import title from "../resources/images/title-dark.png";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="levels-container">
      <div className="home-title">
        <img src={title} className="titlePic" alt="" />
      </div>
      <div className="instructions-cont">
        <div className="instructions-title">INSTRUCTIONS</div>
        <div className="instructions-rules">
          <h4 className="rules-title">Rules of the game:</h4>
          <div className="rules-cont">{/* <img></img> */}</div>
        </div>
        <div className="instructions-tips">
          <h4 className="tips-title">Useful tips:</h4>
          <ul>
            <li className="tip">Shake device to restart level</li>
            <li className="tip">Pinch to zoom in/out grid</li>
            <li className="tip">Hold on a cell to flag an aligator</li>
          </ul>
        </div>
        <button type="button" className="settings-go-back">
                <Link to={"/"} className="link"><BiArrowBack size="1.5rem" /></Link>
            </button>
      </div>
    </div>
  );
};

export default Instructions;
