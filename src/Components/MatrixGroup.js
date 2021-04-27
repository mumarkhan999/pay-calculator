import React from 'react'

function MatrixGroup({handleMatrix, matrix}) {
    return (
        <div onChange={(event) => handleMatrix(event.target.value)} className="matrix-group">
            <h2>Please select the matrix for estimation:</h2>
            <input type="radio" id="hourly" name="matrix" value="Hourly" checked={matrix === "Hourly" ? "true": ""} />
            <label for="hourly">Hourly</label><br />
            <input type="radio" id="monthly" name="matrix" value="Monthly" />
            <label for="monthly">Monthly</label><br />
            <input type="radio" id="yearly" name="matrix" value="Yearly" />
            <label for="yearly">Yearly</label>
        </div>
    )
}

export default MatrixGroup;
