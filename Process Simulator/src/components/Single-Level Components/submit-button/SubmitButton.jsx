import React from "react";
import "./SubmitButton.css";

function SubmitButton({  Icon }) {
    return (
        <button className="button-component">
            <Icon className="icon" />
        </button>
    );
}

export default SubmitButton;