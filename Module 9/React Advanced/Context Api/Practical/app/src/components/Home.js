import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Home Page</h1>

      {user ? (
        <h2>Welcome back, {user.name}</h2>
      ) : (
        <h2>Please login</h2>
      )}
    </div>
  );
}

export default Home;    