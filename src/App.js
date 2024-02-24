// App.js
import React, { useState } from "react";

function App() {
  const [inputs, setInputs] = useState(["", "", "", "", "", "", ""]);

  return (
    <div>
    <h1>Drag & Drop Fields</h1>
    {inputs.map((input, index) => (
      <input key={index} type="text" value={input} />
    ))}
  </div>
  );
}

export default App;
