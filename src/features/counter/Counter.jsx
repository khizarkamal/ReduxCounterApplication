import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,reset } from "./counterSlice";
import classes from "./Counter.module.css";

export const Counter = () => {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();  
    const [incrementValue, setIncrementValue] = useState(0);

    const addValue =  Number(incrementValue) || 0;
    
  return (
    <section id={classes.counterContainer}> 
        <h1 className={classes.counterHeading}>Counter App</h1>
        <p> Count Value: {count}</p>
        <div>
            <input onChange={(e)=> setIncrementValue(e.target.value)} placeholder='Enter Value' type="text" value={incrementValue}/>
        </div>
        <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(incrementByAmount(addValue))} >Add Amount</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </section>
  )
}
