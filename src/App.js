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
    <div className="container">
      <h1>Drag & Drop Fields</h1>
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
