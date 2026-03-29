import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <nav>
      <h2>My App</h2>

      <ThemeToggle />

      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;