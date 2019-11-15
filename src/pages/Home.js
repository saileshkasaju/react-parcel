import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count);
  };
  useEffect(() => {
    setCount(count + 1);
  }, [setCount]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handlePlus}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  );
}
