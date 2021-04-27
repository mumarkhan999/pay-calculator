import { useState } from "react";

import MatrixGroup from "./Components/MatrixGroup";
import Input from "./Components/Input";
import Result from "./Components/Result";

function App() {
    const [matrix, setMatrix] = useState("Hourly");
    const [matrixValue, setMatrixValue] = useState("");
    const [dollarRate, setDollarRate] = useState("");
    const [monthlyWorkingHours, setMonthlyWorkingHours] = useState("");


    return (
        <div>
            <MatrixGroup handleMatrix={setMatrix} matrix={matrix} />
            <Input title={"Matrix value ($)"} handleChange={setMatrixValue} />
            <Input title={"Dollar Rate"} handleChange={setDollarRate} />
            <Input
                title={"Monthly Working Hours"}
                handleChange={setMonthlyWorkingHours}
            />
            <Result
                dollarRate={dollarRate}
                matrixValue={matrixValue}
                matrix={matrix}
                monthlyWorkingHours={monthlyWorkingHours}
            />
        </div>
    );
}

export default App;
