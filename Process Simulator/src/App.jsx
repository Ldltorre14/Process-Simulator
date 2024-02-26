import React from "react";
import { useState } from "react";
import "./App.css";
import Home from "./sections/Home";
import Process from "./process";
import Batch from "./batch";


function App(){

    const [processes,setProcess] = useState([])
    const [batches, setBatch] = useState([])

    const addProcess = (process) => {
        setProcess([...processes, process])
    }

    const addBatch = (batch) => {
        setBatch([...batches, batch])
    }

    return (
        <>
            <Home className="home" addProcess={addProcess}/>
        </>
    );
}

export default App;