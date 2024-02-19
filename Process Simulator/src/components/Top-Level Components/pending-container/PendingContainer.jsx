import React from "react";
import "./PendingContainer.css";
import Visualizer from "../../Middle-Level Components/visualizer/Visualizer";


function PendingContainer() {
    return (
        <div className="pending-container">
            <h2>Pending</h2>
            <Visualizer />
        </div>
    );
}


export default PendingContainer;