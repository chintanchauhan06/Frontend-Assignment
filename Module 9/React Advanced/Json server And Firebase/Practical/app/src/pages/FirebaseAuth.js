import React, { useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";

function FirebaseAuth() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <h2>Firebase Auth</h2>

      {user ? (
        <>
          <p>{user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
}

export default FirebaseAuth;