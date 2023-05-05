import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmout, reset } from "./counterSlice";

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    console.log(count);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    const handleIncrementByFive = () => {
        dispatch(incrementByAmout(50000));
    };

    return (
        <div>
            <h1>Hellloo This is counter View</h1>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrementByFive}>+5</button>
        </div>
    );
};

export default CounterView;
