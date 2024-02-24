// App.js
import React, { useState, useEffect } from "react";

function App() {
  const [inputs, setInputs] = useState(["", "", "", "", "", "", ""]);

  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem("inputs"));

    if (storedInputs && storedInputs.length === inputs.length) {
      setInputs(storedInputs);
    }
  }, []);

  const handleInputChange = (index, value) => {
    const inputsClone = [...inputs];
    inputsClone[index] = value;
    setInputs(inputsClone);
    localStorage.setItem("inputs", JSON.stringify(inputsClone));
  };

  const handleClear = () => {
    localStorage.removeItem("inputs");
    setInputs(["", "", "", "", "", "", ""]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Drag & Drop Fields</h1>
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          style={{
            padding: "5px",
            margin: "5px",
            backgroundColor: "#eee",
            width: "200px",
          }}
        />
      ))}
      <button
        onClick={handleClear}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
