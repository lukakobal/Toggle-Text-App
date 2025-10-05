import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  const toggleText = () => {
    setVisible(!visible);
  };
  return (
    <div className="App">
      <h1>Toggle Text App ✨</h1>
      <button onClick={toggleText}>
        {visible ? "Hide Text" : "Show Text"}
      </button>
      {visible && <p>This is some secret text! 🔥</p>}
    </div>
  );
}
