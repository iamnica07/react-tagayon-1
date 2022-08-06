import React, { useState } from 'react';

function Exercise3() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="mt-5">This is Exercise 3</h1>
      <p>Button has been clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Exercise3;