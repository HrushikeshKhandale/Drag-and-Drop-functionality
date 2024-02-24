// App.js
import React, { useState } from "react";

function App() {
  const [inputs, setInputs] = useState(["", "", "", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    const inputsClone = [...inputs];
    inputsClone[index] = value;
    setInputs(inputsClone);
  };

  return (
    <div>
    <h1>Drag & Drop Fields</h1>
    {inputs.map((input, index) => (
      <input
        key={index}
        type="text"
        value={input}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    ))}
    <button onClick={() => setInputs(["", "", "", "", "", "", ""])}>Clear</button>
  </div>
  );
}

export default App;
