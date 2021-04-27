import React from 'react'

function Result({dollarRate, matrixValue, matrix, monthlyWorkingHours}) {

    let pay = {}

    const collectPayFromHourlyRate = () => {
        let result = {
            hourly: 0,
            monthly: 0,
            yearly: 0
        };
        result.hourly = matrixValue;
        result.monthly = (matrixValue * monthlyWorkingHours).toFixed(2);
        result.yearly = (12 * result.monthly).toFixed(2);
        return result;
    }

    const collectPayFromMonthlyRate = () => {
        let result = {
            hourly: 0,
            monthly: 0,
            yearly: 0
        };

        result.hourly = (matrixValue / monthlyWorkingHours).toFixed(2);
        result.monthly = matrixValue;
        result.yearly = (12 * result.monthly).toFixed(2);
        return result;
    }

    const collectPayFromYearlyRate =  () => {
        let result = {
            hourly: 0,
            monthly: 0,
            yearly: 0
        };

        result.yearly = matrixValue;
        result.monthly = (matrixValue / 12).toFixed(2);
        result.hourly = (result.monthly / monthlyWorkingHours).toFixed(2);
        return result;
    }

    switch(matrix) {
        case 'Hourly':
          pay = collectPayFromHourlyRate();
          break;
        case 'Monthly':
          pay = collectPayFromMonthlyRate();
          break;
        case 'Yearly':
            pay = collectPayFromYearlyRate();
            break;
        default:
            break;
    }

    return (
        <div className="result">
            <hr />
            <h2>In ($)</h2>
            <h3>Hourly Pay:      <span>{pay.hourly}</span></h3>
            <h3>Monthly Pay:      <span>{pay.monthly}</span></h3>
            <h3>Yearly Pay:      <span>{pay.yearly}</span></h3>
            <hr />
            <h2>In your currency</h2>
            <h3>Hourly Pay:      <span>{(pay.hourly * dollarRate).toFixed(2)}</span></h3>
            <h3>Monthly Pay:      <span>{(pay.monthly * dollarRate).toFixed(2)}</span></h3>
            <h3>Yearly Pay:      <span>{(pay.yearly * dollarRate).toFixed(2)}</span></h3>
        </div>
    )
}

export default Result
