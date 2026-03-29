import React, { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickButton;