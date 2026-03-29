import React from "react";
import UsersTable from "./components/UsersTable";
import CrudJsonServer from "./pages/CrudJsonServer";
import FirebaseAuth from "./pages/FirebaseAuth";

function App() {
  return (
    <div>
      <h1>React API + CRUD + Firebase</h1>

      <UsersTable />
      <hr />

      <CrudJsonServer />
      <hr />

      <FirebaseAuth />
    </div>
  );
}

export default App;