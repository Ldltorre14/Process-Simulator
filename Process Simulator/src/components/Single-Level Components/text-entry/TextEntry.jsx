import React from "react";
import "./TextEntry.css"

function TextEntry({textLabel}){
    return (
        <div className="text-entry">
            <label>{textLabel}</label>
            <input type="text" />
        </div>
    );
}

export default TextEntry;

