import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Chintan", age: 21 },
    { id: 2, name: "Rahul", age: 22 },
    { id: 3, name: "Amit", age: 23 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;