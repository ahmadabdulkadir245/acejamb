import React, { useState } from "react";

function New() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={() => setColor("")}>count {count}</button>
    </div>
  );
}

export default New;
