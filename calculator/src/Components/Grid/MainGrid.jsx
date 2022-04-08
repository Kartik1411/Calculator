import React, {useState} from 'react';
import './Grid.css';

function MainGrid() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operations = ['+', '-', '*', '/']

    const updateCalc = value => {
        if(operations.includes(value) && calc === "" || (operations.includes(value) && operations.includes(calc.slice(-1)))){
            return;
        }

        setCalc(calc + value);
        // console.log('calc: ', calc);

        if(!operations.includes(value)){
            // console.log('calc + value: ', calc + value);
            setResult(eval(calc + value).toString());
        }
    }

    const calculateOnEqualsTo = () => {

        setCalc(eval(calc).toString());
        // console.log('calc: ', calc);
    }

    const AC = () => {
        if(calc === 0){
            return;
        }
        setResult("");
        setCalc("");
    }

    const deleteLastDigit = () => {
        if(calc === 0){
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }

    return (
        <div className="parent-container">

            <p className="heading-text">Calculator</p>

            <div className="accumulator">
                {calc || result || 0}
            </div>

            <div className="op-div">
                <button className='btn' onClick={() => updateCalc("+")} > + </button>
                <button className='btn' onClick={() => updateCalc("-")} > - </button>
                <button className='btn' onClick={() => updateCalc("*")} > * </button>
                <button className='btn' onClick={() => updateCalc("/")} > / </button>
            </div>

            <div className="num-div">
                <div className="row grid-center">
                    <button className='btn' onClick={() => updateCalc("9")}> 9 </button>
                    <button className='btn' onClick={() => updateCalc("8")}> 8 </button>
                    <button className='btn' onClick={() => updateCalc("7")}> 7 </button>
                </div>

                <div className="row grid-center">
                    <button className='btn' onClick={() => updateCalc("6")}> 6 </button>
                    <button className='btn' onClick={() => updateCalc("5")}> 5 </button>
                    <button className='btn' onClick={() => updateCalc("4")}> 4 </button>
                </div>
                <div className="row grid-center">
                    <button className='btn' onClick={() => updateCalc("3")}> 3 </button>
                    <button className='btn' onClick={() => updateCalc("2")}> 2 </button>
                    <button className='btn' onClick={() => updateCalc("1")}> 1 </button>
                </div>
                <div className="row grid-center">
                    <button className='btn' onClick={() => updateCalc("0")}> 0 </button>
                    <button className='btn' onClick={() => updateCalc(".")}> . </button>
                    <button className='btn' onClick={calculateOnEqualsTo} value="="> = </button>
                </div>
                <div className="row grid-center">
                    <button className="btn-delete" onClick={AC}> AC </button>
                    <button className="btn-delete" onClick={deleteLastDigit}> Delete </button>
                </div>
            </div>

        </div>
    )
}

export default MainGrid