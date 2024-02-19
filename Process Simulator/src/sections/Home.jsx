import React from "react";
import "./Home.css";
import SettingsContainer from "../components/Top-Level Components/settings-container/SettingsContainer";
import PendingContainer from "../components/Top-Level Components/pending-container/PendingContainer";
import RunningContainer from "../components/Top-Level Components/running-container/RunningContainer";
import FinishedContainer from "../components/Top-Level Components/finished-container/FinishedContainer";

function Home() {
    return (
        <section id="home">
            <h1>Process Simulator</h1>
            <SettingsContainer className="settings-container" />
            <div className="processes-container">
                <PendingContainer className="pending-container" />
                <RunningContainer className="running-container" />
                <FinishedContainer className="finished-container" />
            </div>
        </section>
    );
}


export default Home;