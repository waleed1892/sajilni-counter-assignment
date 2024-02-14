"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='flex gap-4 items-center'>
      <button
        className='w-10 h-10 rounded-full bg-slate-800 text-white text-2xl flex items-center justify-center'
        onClick={decrement}
      >
        -
      </button>

      <h1 className='text-2xl font-bold w-10 text-center'>{count}</h1>

      <button
        className='w-10 h-10 rounded-full bg-slate-800 text-white text-2xl flex items-center justify-center'
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
