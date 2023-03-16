import React from "react";
import '../styles/Levels.css'
import '../styles/App.css'
import title from "../resources/images/title-dark.png"
import { BiArrowBack } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineLock } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Levels = () => {

  return (
    <div className="levels-container">
      <div className="home-title">
        <img src={title} className="titlePic" alt="" />
      </div>
      <div className="levels-cont">
        <div className="levels-title">LEVEL SELECT</div>
        <div className="levels">
          <div className="level lv1"><Link to={"/game"} className="link"><div className="level-inside">1</div></Link><div className="level-time">01:29</div></div>
          <div className="level lv2"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv3"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv4"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv5"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv6"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv7"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv8"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv9"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv10"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv11"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
          <div className="level lv12"><div className="level-inside"><AiOutlineLock style={{color: "black"}}/></div><div className="level-time"></div></div>
        </div>
      </div>
      <div className="other-option-btns">
        <button type="button" className="levels-bottom-btn"><Link to={"/"} className="link"><BiArrowBack size="1.5rem"/> </Link></button>
        <button type="button" className="levels-bottom-btn"><Link to={"/settings"} className="link"> <FiSettings size="1.5rem"/> </Link> </button>

      </div>
    </div>
  )
}

export default Levels
