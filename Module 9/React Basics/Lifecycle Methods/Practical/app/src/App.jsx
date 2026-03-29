import React, { useState } from "react";
import UserData from "./UserData";
import LifecycleDemo from "./LifecycleDemo";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <UserData />

      <button onClick={() => setShow(!show)}>
        Toggle Lifecycle Component
      </button>

      {show && <LifecycleDemo />}
    </>
  );
}

export default App;