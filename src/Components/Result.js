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
        result.monthly = matrixValue * monthlyWorkingHours;
        result.yearly = 12 * result.monthly;
        console.log("From hourly");
        console.log(result);
        return result;
    }

    const collectPayFromMonthlyRate = () => {
        let result = {
            hourly: 0,
            monthly: 0,
            yearly: 0
        };

        result.hourly = matrixValue / monthlyWorkingHours;
        result.monthly = matrixValue;
        result.yearly = 12 * result.monthly;
        console.log("From Monthly");
        console.log(result);
        return result;
    }

    const collectPayFromYearlyRate =  () => {
        let result = {
            hourly: 0,
            monthly: 0,
            yearly: 0
        };

        result.yearly = matrixValue;
        result.monthly = matrixValue / 12;
        result.hourly = result.monthly / monthlyWorkingHours;
        console.log("From Yearly");
        console.log(result);
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
        <div>
            <hr />
            <h2>In ($)</h2>
            <h3>Hourly Pay:      <span>{pay.hourly}</span></h3>
            <h3>Monthly Pay:      <span>{pay.monthly}</span></h3>
            <h3>Yearly Pay:      <span>{pay.yearly}</span></h3>
            <hr />
            <h2>In your currency</h2>
            <h3>Hourly Pay:      <span>{pay.hourly * dollarRate}</span></h3>
            <h3>Monthly Pay:      <span>{pay.monthly * dollarRate}</span></h3>
            <h3>Yearly Pay:      <span>{pay.yearly * dollarRate}</span></h3>
        </div>
    )
}

export default Result
