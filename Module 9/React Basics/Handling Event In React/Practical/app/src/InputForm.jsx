import React, { useState } from "react";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      <h3>You typed: {inputValue}</h3>
    </div>
  );
}

export default InputForm;