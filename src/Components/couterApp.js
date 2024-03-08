import React from "react";
import { increase,decrease,reset } from "../redux/features/counters/counterSlice";
import { UseDispatch,useDispatch,useSelector } from "react-redux";

const CounterApp=()=>{

let count=useSelector((state)=>state.counter)
let dispatch=useDispatch();
// let count=useSelector((state)=>state)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button>Decrease</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>


        </div>
    )
}

export default CounterApp;