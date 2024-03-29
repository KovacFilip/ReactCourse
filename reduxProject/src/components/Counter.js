import { useDispatch, useSelector } from 'react-redux';

import {
    decrement,
    increase,
    increment,
    toggleCounter,
} from '../store/counterSlice';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(increment());
    };

    const increaseHandler = () => {
        dispatch(increase({ amount: 5 }));
    };

    const decrementHandler = () => {
        dispatch(decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>IncrementBy5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
