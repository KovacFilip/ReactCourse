import { connect } from 'react-redux';
import classes from './Counter.module.css';

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' }),
    };
};

const CounterVol2 = ({ increment, decrement, counter }) => {
    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterVol2);
