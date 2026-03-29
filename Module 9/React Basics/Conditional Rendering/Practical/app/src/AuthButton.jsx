import React, { useState } from "react";

function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome User!" : "Please Login"}</h2>

      <button onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default AuthButton;