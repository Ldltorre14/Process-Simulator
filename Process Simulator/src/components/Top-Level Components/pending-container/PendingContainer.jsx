import React, { useState } from "react";
import "./PendingContainer.css";
import Visualizer from "../../Middle-Level Components/visualizer/Visualizer";
import BatchComponent from "../../Single-Level Components/batch-component/BatchComponent";


function PendingContainer() {

    const [pendingBatches, setPendingBatches] = useState([])

    const addPendingBatch = (batch) => {
        setPendingBatches([...pendingBatches, batch])
    }

    return (
        <div className="pending-container">
            <h2>Pending</h2>
            <Visualizer>
                {pendingBatches.map((batch,index) => (
                    <BatchComponent Batch={batch} />
                ))}
            </Visualizer>
        </div>
    );
}


export default PendingContainer;