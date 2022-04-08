import { useState } from "react";

import * as math from "mathjs";

import "./Calculator.css";
import Button from "./Button";
import Input from "./Input";

const Calculator = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const addToText = (value) => {
        setText((text) => [...text, value + " "]);
        console.log('text: ', text);
    };

    const calculateResult = () => {
        const input = text.join(""); // Remove commas
        setResult(math.evaluate(input));
    };

    const resetInput = () => {
        setText("");
        setResult("");
    };

    return (
        <div className="calc-wrapper">
            <Input text={text} result={result} />
            <div className="row">
                <Button value="+" handleClick={addToText} />
                <Button value="-" handleClick={addToText} />
                <Button value="*" handleClick={addToText} />
                <Button value="/" handleClick={addToText} />
            </div>
            <div className="row">
                <Button value="9" handleClick={addToText} />
                <Button value="8" handleClick={addToText} />
                <Button value="7" handleClick={addToText} />
                <Button value="6" handleClick={addToText} />
            </div>
            <div className="row">
                <Button value="5" handleClick={addToText} />
                <Button value="4" handleClick={addToText} />
                <Button value="3" handleClick={addToText} />
                <Button value="2" handleClick={addToText} />
            </div>
            <div className="row">
                <Button value="=" handleClick={calculateResult} />
                <Button value="1" handleClick={addToText} />
                <Button value="0" handleClick={addToText} />
                <Button value="." handleClick={addToText} />
            </div>
            <Button value="Clear" color="red" handleClick={resetInput} />
        </div>
    );
};

export default Calculator;