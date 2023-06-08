import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button
          onClick={() => setCount((count) => (count < 10 ? count + 1 : count))}
        >
          +
        </button>
        <button
          onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
        >
          -
        </button>
        <p>count is {count}</p>
      </div>
    </>
  );
}
