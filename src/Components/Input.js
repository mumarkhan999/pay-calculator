import React from "react";

function Input({ title, handleChange }) {
    return (
        <div className="input-field">
            <div className="inner-input-wrapper">
                <span>{title}:</span>
                <input type="text" onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    );
}

export default Input;
