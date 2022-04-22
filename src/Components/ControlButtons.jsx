import React from "react";
import "./css/ControlButtons.css";
export  function ControlButtons(props) {
    const StartBtn = (
        <div onClick={props.handleStart} className="btn btn-one btn-start">
            Start
        </div>
    );

    const ActiveBtn = (
        <div className="btn-grp">
            <div className="btn btn-two" onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-one" onClick={props.handlePlayPause}>
                {props.Played ? "Pause": "Resume" }
            </div>
        </div>
    );

    return (
        
        <div  className="Control-Buttons">
            <div>{props.Active ? ActiveBtn : StartBtn}</div>
        </div>
    );
}
