import { useState } from 'react';

export default function Counter({ totalCount, handleClickCounter }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div>
        {count}/{totalCount}
      </div>
      <button
        className="counter-button"
        onClick={() => {
          setCount((prev) => prev + 1);
          handleClickCounter();
        }}
      >
        plus
      </button>
    </div>
  );
}
