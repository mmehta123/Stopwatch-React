import React,{ useEffect, useState } from 'react'
import {ControlButtons} from "./ControlButtons.jsx";
import {Timer} from "./Timer.jsx";
import './css/StopWatch.css'

export default function StopWatch() {
    const [isActive,setActive]=useState();
    const [isPlayed,setPlayed]=useState();
    const [time,setTime]=useState(0);

    useEffect(()=>{
        let interval=null;
    if(isPlayed===true){
        interval=setInterval(()=>{
            setTime((time)=>time+10);
        },10)
    }
    return () => {
        clearInterval(interval)
    }
    },[isPlayed,isActive]);
    
    const handleStart=()=>{
        setActive(true);
        setPlayed(true);
    }

    const handlePlayPause=()=>{
        setPlayed(!isPlayed);
    }

    const handleReset=()=>{
        setPlayed(false);
        setActive(false);
        setTime(0);
    }

    return (
        <div className="stop-watch">
            <h1>
                <Timer time={time}/>
            </h1>
            <ControlButtons
            Active={isActive}
            Played={isPlayed}
            handleStart={handleStart}
            handleReset={handleReset}
            handlePlayPause={handlePlayPause}
            />
        </div>
    );
}