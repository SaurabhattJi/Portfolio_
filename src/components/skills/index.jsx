import React, { useRef } from "react";
import Section from "../shared/section";
import "./style.scss";
import Skill from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Skills = () => {
    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={Skill}
                        alt="imageJsReact"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>React Js</li>
                        </ul>
                        <br />
                        Familiarity with Node.js, Express.js, Ejs, MongoDB,
                        Mongoose, jQuery, Material UI, Redux and Tailwind CSS.
                    </p>

                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                    />

                    <button
                        className="audio-play-btn"
                        onClick={handlePlayAudio}
                    >
                        <FaPlay style={{ marginRight: "8px" }} />
                        Play Intro
                    </button>

                    <audio
                        ref={audioRef}
                        src="/audio/achievement-unlocked-361842.mp3"
                        preload="auto"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
