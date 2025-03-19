import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Links, Meta } from "@remix-run/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav
        className="w-full flex justify-between"
        style={{
          background: "black",
          position: "fixed",
          top: "0px",
          right: "0px",
          left: "0px",
          width: "100%",
        }}
      >
        {/* <Meta />
        <Links /> */}
        <h1> Devan Thomas </h1>
      </nav>

      {/* <pageContent /> */}

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
