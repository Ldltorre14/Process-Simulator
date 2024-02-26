import React from "react"
import "./BatchComponent.css"
import Batch from "../../../batch";

function BatchComponent(Batch){
    return (
        <div className="batch">
            <h3>Batch Size: {Batch.getSize()}</h3>
            <ul>
                {Batch.processes.map((process,index) => (
                    <li key={index}>
                        ProgName:{process.name}, Operation:{process.operation},
                        EstTime:{process.estTime}, ID:{process.id} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BatchComponent;