import React from "react";
import "./SettingsContainer.css";
import TextEntry from "../../Single-Level Components/text-entry/TextEntry";
import OptionSelector from "../../Single-Level Components/option-selector/OptionSelector";
import SubmitButton from "../../Single-Level Components/submit-button/SubmitButton";
import {ArrowDownIcon} from '@heroicons/react/outline';


function SettingsContainer(){
    var operations = ["Addition","Substraction","Multiplication","Division"];
    var estTimes = [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="settings">
                <TextEntry textLabel="Name" />
                <OptionSelector text="Operations" options={operations} />
                <OptionSelector text="Estimated Time" options={estTimes} />
            </div>
            <SubmitButton Icon={ArrowDownIcon} />
        </div>
    );


}


export default SettingsContainer;