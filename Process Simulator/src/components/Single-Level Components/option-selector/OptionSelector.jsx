import React from "react";
import "./OptionSelector.css";


function OptionSelector({text, options}){

    return (
        <div className="option-selector">
            <label>{text}</label>
            <select>
                {options.map((option, index) =>(
                    <option key={index} value={option}>{option}</option>
                ))};
            </select>
        </div>
    );

}


export default OptionSelector;