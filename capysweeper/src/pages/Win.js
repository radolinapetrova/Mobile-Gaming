import React from "react";
import '../styles/Win.css'
import '../styles/App.css'
import title from "../resources/images/title-dark.png"
import happyCapy from "../resources/images/happy.png"
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"
import {FiSettings} from 'react-icons/fi'

export default function Win() {
    return (
        <div className="win-container">
            <div className="home-title">
                <img src={title} className="titlePic" alt="" />
            </div>
            <div className="win-cont">
                <p className="win-info">LEVEL COMPLETE!</p>
                    <button type="button" className="button win-next-level-btn">NEXT LEVEL</button>
                    <button type="button" className="button go-home-btn"> <Link to={"/"} className="link"> GO HOME</Link></button>
            </div>
            <div className="win-capy-cont">
                <img src={happyCapy} className="win-capy" alt="happybara"/>
            </div>
            <div className="other-option-btns">
        <button type="button" className="levels-bottom-btn"><Link to={"/levels"} className="link"><BiArrowBack size="1.5rem"/> </Link></button>
        <button type="button" className="levels-bottom-btn"><Link to={"/settings"} className="link"> <FiSettings size="1.5rem"/> </Link> </button>

      </div>
        </div>
    )
}