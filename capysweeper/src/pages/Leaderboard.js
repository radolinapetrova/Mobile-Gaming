import React from "react";
import "../styles/Leaderboard.css";
import "../styles/App.css";
import title from "../resources/images/title-dark.png";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  return (
    <div className="levels-container">
      <div className="home-title">
        <img src={title} className="titlePic" alt="" />
      </div>
      <div className="lb-cont">
        <div className="instructions-title">LEADERBOARD</div>
        <div className="lbCard">
          <div className="lbRank">27</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">Versayce</div>
            <div className="lbLevel">level 15</div>
          </div>
        </div>
        <div className="lbCard lbWin">
          <div className="lbRank">27</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">You</div>
            <div className="lbLevel">level 12</div>
          </div>
        </div>
        <div className="lbCard">
          <div className="lbRank">28</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">Fatma</div>
            <div className="lbLevel">level 10</div>
          </div>
        </div>
        <div className="lbCard">
          <div className="lbRank">29</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">Serasfati</div>
            <div className="lbLevel">level 9</div>
          </div>
        </div>
        <div className="lbCard">
          <div className="lbRank">30</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">Margo</div>
            <div className="lbLevel">level 8</div>
          </div>
        </div>
        <div className="lbCard">
          <div className="lbRank">31</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">Dop Dop Yes Yes</div>
            <div className="lbLevel">level 7</div>
          </div>
        </div>
        <div className="lbCard">
          <div className="lbRank">32</div>
          <div className="lbPic"></div>
          <div className="lbInfo">
            <div className="lbName">Fiki</div>
            <div className="lbLevel">level 5</div>
          </div>
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

export default Leaderboard;
