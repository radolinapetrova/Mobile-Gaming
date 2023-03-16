import React from "react";
import '../styles/Lose.css'
import '../styles/App.css'
import title from "../resources/images/title-dark.png"
import sadCapy from "../resources/images/devastated.png"
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"
import {FiSettings} from 'react-icons/fi'

export default function Lose() {
    return (
        <div className="lose-container">
            <div className="lose-title">
                <img src={title} className="titlePic" alt="" />
            </div>
            <div className="lose-cont">
                <p className="lose-info">LEVEL FAILED</p>
                <button type="button" className="button lose-next-level-btn"><Link to={"/game"} className="link">RETRY LEVEL</Link></button>
                    <button type="button" className="button go-home-btn"> <Link to={"/"} className="link"> GO HOME</Link></button>
            </div>
            <div className="lose-capy-cont">
                <img src={sadCapy} className="lose-capy" alt="sadybara"/>
            </div>
            <div className="other-option-btns">
        <button type="button" className="levels-bottom-btn"><Link to={"/levels"} className="link"><BiArrowBack size="1.5rem"/> </Link></button>
        <button type="button" className="levels-bottom-btn"><Link to={"/settings"} className="link"> <FiSettings size="1.5rem"/> </Link> </button>

      </div>
        </div>
    )
}