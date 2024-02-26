import React from "react";
import "./FinishedContainer.css";
import { useState } from "react";
import Visualizer from "../../Middle-Level Components/visualizer/Visualizer";
import BatchComponent from "../../Single-Level Components/batch-component/BatchComponent";


function FinishedContainer() {
    const [finishedBatches,setFinishedBatch] = useState([])

    const addFinishedBatch = (batch) => {
        setFinishedBatch([...finishedBatches, batch])
    }

    return (
        <div className="finished-container">
           <h2>Finished</h2> 
           <Visualizer>
                {finishedBatches.map((finishedBatch,index) => (
                    <BatchComponent batch={finishedBatch}/>
                ))}
           </Visualizer>
        </div>
    );
}


export default FinishedContainer;