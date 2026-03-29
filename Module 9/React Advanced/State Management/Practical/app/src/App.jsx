import React from "react";
import ReduxCounter from "./components/ReduxCounter";
import TodoRecoil from "./components/TodoRecoil";
import CrudRedux from "./components/CrudRedux";

function App() {
  return (
    <div>
      <h1>State Management Demo</h1>

      <ReduxCounter />
      <hr />

      <TodoRecoil />
      <hr />

      <CrudRedux />
    </div>
  );
}

export default App;