import React from "react";
import "./Home.css";
import SettingsContainer from "../components/Top-Level Components/settings-container/SettingsContainer";


function Home() {
    return (
        <section id="home">
            <h1>Process Simulator</h1>
            <SettingsContainer/>
            <div className="processes-container">
                
            </div>
        </section>
    );
}


export default Home;