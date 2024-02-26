import React from "react";
import { useState } from "react";
import "./RunningContainer.css";
import Visualizer from "../../Middle-Level Components/visualizer/Visualizer";


function RunningContainer() {
    const [runningBatch,setRunningBatch] = useState([])

    const addRunningBatch = (batch) => {
        setRunningBatch(batch)
    }

    return (
        <div className="running-container">
            <h2>Running</h2>
        </div>
    );
}


export default RunningContainer;