import React, { useEffect, useState } from "react";

const API = "http://localhost:3001/users";

function CrudJsonServer() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // GET
  const fetchUsers = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST
  const addUser = async () => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    fetchUsers();
  };

  // DELETE
  const deleteUser = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  // PUT (update full)
  const updateUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Updated Name" }),
    });
    fetchUsers();
  };

  // PATCH (partial)
  const patchUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Patched Name" }),
    });
    fetchUsers();
  };

  return (
    <div>
      <h2>CRUD JSON Server</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add</button>

      {users.map((u) => (
        <div key={u.id}>
          {u.name}
          <button onClick={() => deleteUser(u.id)}>Delete</button>
          <button onClick={() => updateUser(u.id)}>PUT</button>
          <button onClick={() => patchUser(u.id)}>PATCH</button>
        </div>
      ))}
    </div>
  );
}

export default CrudJsonServer;