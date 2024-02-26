import React, { useState } from "react";
import "./Home.css";
import SettingsContainer from "../components/Top-Level Components/settings-container/SettingsContainer";
import PendingContainer from "../components/Top-Level Components/pending-container/PendingContainer";
import RunningContainer from "../components/Top-Level Components/running-container/RunningContainer";
import FinishedContainer from "../components/Top-Level Components/finished-container/FinishedContainer";
import Batch from "../batch";
import Process from "../process";

const batch = new Batch(new Process("Leonardo","Addition",10,"1"),
                        new Process("Juan","Addition",10,"2"),
                        new Process("Enrique","Addition",10,"3"),
                        new Process("Carlos","Addition",10,"4"))
function Home({addProcess}) {

    return (
        <section id="home">
            <h1>Process Simulator</h1>
            <SettingsContainer className="settings-container" addProcess={addProcess}/>
            <div className="processes-container">
                <PendingContainer className="pending-container" />
                <RunningContainer className="running-container" />
                <FinishedContainer className="finished-container" />
            </div>
        </section>
    );
}


export default Home;