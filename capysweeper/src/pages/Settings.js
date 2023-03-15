import React, { useState } from "react";
import '../styles/Home.css'
import '../styles/Settings.css'
import title from "../resources/images/title-dark.png"
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'
import audioSrc from '../resources/audios/audio-file.mp3';


const Settings = () => {
    const [isMusicOff, setIsMusicOff] = useState(false);
    const [audio, setAudio] = useState(null);

    const handleMusicOff = (event) => {
        setIsMusicOff(event.target.checked);
        if (event.target.checked) {
            // Play audio when music is turned off
            const newAudio = new Audio(audioSrc);
            newAudio.play();
            setAudio(newAudio);
        } else {
            // Pause audio when music is turned on
            audio.pause();
            setAudio(null);
        }
    }

    return (
        <div className="settings-container">
            <div className="settings-title">
                <img src={title} className="titlePic" alt="" />
            </div>
            <div className="settings-cont">
                <div className="settings-name">SETTINGS</div>
                <div className="settings-items">
                    <div className="settings-item">
                        <p>Night Mode</p>
                        <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
                    </div>
                    <div className="settings-item">
                        <p>Music</p>
                        <input type="checkbox" id="switch2" checked={isMusicOff} onChange={handleMusicOff} />
                        <label htmlFor="switch2">Toggle</label>
                    </div>
                    <div className="settings-item">
                        <p>Vibrations Off</p>
                        <input type="checkbox" id="switch3" /><label for="switch3">Toggle</label>
                    </div>
                    <div className="settings-item">
                        <p>Automathic Theme</p>
                        <input type="checkbox" id="switch4" /><label for="switch4">Toggle</label>
                    </div>
                </div>
            </div>
            <button type="button" className="settings-go-back">
                <Link to={"/"} className="link"><BiArrowBack size="1.5rem" /></Link>
            </button>
        </div>
    )
}

export default Settings;
