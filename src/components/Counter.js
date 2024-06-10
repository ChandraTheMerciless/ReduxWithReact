import React from'react';
import { useSelector, useDispatch } from'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector( state => state.counter );
  const showCounter = useSelector( state => state.showCounter );

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const increaseHandler = ( ) => {
    dispatch({ type: 'INCREASE', amount: 5 });
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      
      {showCounter && 
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by five</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      }

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
