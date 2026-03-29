import React from "react";

function UserCard({ name, age, location }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      width: "250px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;