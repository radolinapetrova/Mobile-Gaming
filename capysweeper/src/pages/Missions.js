import React from "react";
import "../styles/Missions.css";
import "../styles/App.css";
import title from "../resources/images/title-dark.png";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";

const Missions = () => {
  return (
    <div className="missions-container">
      <div className="home-title">
        <img src={title} className="titlePic" alt="" />
      </div>
      <div className="missions-cont">
        <div className="instructions-title">WEEKLY MISSIONS</div>
        <div className="msCard">
          <div className="msStatus">
            <MdOutlineDone />
          </div>
          <div className="msTask">Reach level 5</div>
        </div>

        <div className="msCard">
          <div className="msStatus">
            <MdOutlineDone />
          </div>
          <div className="msTask">Complete a level without flagging cells</div>
        </div>

        <div className="msCard">
          <div className="msStatus">
          </div>
          <div className="msTask">Reach level 15</div>
        </div>

        <div className="msCard">
          <div className="msStatus">
          </div>
          <div className="msTask">Complete a level in under 2 minutes</div>
        </div>
      </div>
      <button type="button" className="settings-go-back">
        <Link to={"/"} className="link">
          <BiArrowBack size="1.5rem" />
        </Link>
      </button>
    </div>
  );
};

export default Missions;
