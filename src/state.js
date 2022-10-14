
import { useState } from "react";
const State = () => {
    let [value, setvalue] = useState(0)
    let increase = () => {
        setvalue(++value)
    }
    let decrease = () => {
        setvalue(--value)

    }
    let reset = () => {
        setvalue(0)

    }
    //     let [value, update] = useState("hello")

    //     let handleclick = ()=>{
    //         update("Your reacting ")
    //     //     alert("it works ?............")
    return (
        <div className="state">
           <center> <h1>{value}</h1></center>
            <center><button onClick={increase}>Increase</button></center>
            <center><button onClick={reset}>Reset</button></center>
            <center><button onClick={decrease}>Decrease</button></center>
        </div>
        // <div className="state">
        //     <h1>{value}</h1>
        //     <button onClick={handleclick}>click</button>
        // </div>
    );
}
export default State;