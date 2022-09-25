import "../styles/Calc.css";

export function CalcPresentation(props) {

    return (
        <div className="Calc">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={props.resultRef}>
                    {props.result}
                </p>
                <input
                    pattern="[0-9]"
                    ref={props.inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <button onClick={props.plus}>add</button>
                <button onClick={props.minus}>substract</button>
                <button onClick={props.times}>multiply</button>
                <button onClick={props.divide}>divide</button>
                <button onClick={props.resetInput}>reset input</button>
                <button onClick={props.resetResult}>reset result</button>
            </form>
        </div>
    );
}

