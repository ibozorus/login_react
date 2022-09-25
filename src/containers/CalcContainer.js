import {
    useState,
    useRef
} from "react";
import "../styles/Calc.css";
import {CalcPresentation} from "../presentational/CalcPresentation.js"

function CalcContainer() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    };

    function minus(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    };

    function times(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    };

    function divide(e) {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = null;
    };

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    };

    return (
        <>
            <CalcPresentation
                inputRef={inputRef}
                resultRef={resultRef}
                result={result}
                plus={plus} minus={minus} times={times} divide={divide}
                resetInput={resetInput} resetResult={resetResult}/>
        </>
    );
}

export default CalcContainer;
