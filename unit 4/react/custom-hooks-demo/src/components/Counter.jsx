import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '24px', textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
};

export default Counter;
