import React from "react";
import "./SettingsContainer.css";
import TextEntry from "../../Single-Level Components/text-entry/TextEntry";
import OptionSelector from "../../Single-Level Components/option-selector/OptionSelector";
import SubmitButton from "../../Single-Level Components/submit-button/SubmitButton";
import {ArrowDownIcon} from '@heroicons/react/outline';
import { useState } from "react";
import Process from "../../../process";


function SettingsContainer({onAddProcess}){
    var operations = ["Addition","Substraction","Multiplication","Division"];
    var estTimes = [5,6,7,8,9,10,11,12,13,14,15,16,17,18]

    const [name,setName] = useState("")
    const [operation,setOperation] = useState("")
    const [estTime,setEstTime] = useState(10)
    const [id,setId] = useState("")
    
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleOperationChange = (selectedOption) => {
        setOperation(selectedOption)
    }

    const handleEstTimeChange = (selectedOption) => {
        setEstTime(selectedOption)
    }

    const handleIDChange = () => {
        setId((Math.random() * 100000).toString()) 
    }

    const handleSubmit = () => {
        process = new Process(name,operation,estTime,id)
        onAddProcess(process)
        
        setName("")
        setOperation("")
        setEstTime(10)
        setId("")
    }

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="settings">
                <TextEntry textLabel="Name" onChange={handleNameChange} />
                <OptionSelector text="Operations" options={operations} onChange={handleOperationChange} />
                <OptionSelector text="Estimated Time" options={estTimes} onChange={handleEstTimeChange}/>
            </div>
            <SubmitButton Icon={ArrowDownIcon} onClick={handleSubmit}/>
        </div>
    );


}


export default SettingsContainer;