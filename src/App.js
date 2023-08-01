import React, { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className="container">
        <br />
        <div>
          <button className="btn" onClick={() => setNum(num + 1)}>
            Artır
          </button>
        </div>
        <div className="num">{num}</div>
        <br />
        <div>
          <button className="btn" onClick={() => setNum(num - 1)}>
            Azalt
          </button>
          <br />
        </div>
        <br />
      </div>
    </>
  );
}
