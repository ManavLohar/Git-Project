import React, { useState } from "react";

const ForTesting = () => {
  const [num, setNum] = useState(0);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      <p onClick={() => setNum((prev) => prev - 1)}>-</p>
      <p>{num}</p>
      <p onClick={() => setNum((prev) => prev + 1)}>+</p>
    </div>
  );
};

export default ForTesting;
