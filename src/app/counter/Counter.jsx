import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../redux/CounterSlice';
export default function Counter(){
    const value = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(decrement())}>increment</button>
      <button className='mx-5' onClick={() => dispatch(increment())}> decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>*5</button>
        </div>
    )
}