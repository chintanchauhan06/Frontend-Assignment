import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/todoAtom";

function TodoRecoil() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div>
      <h2>Recoil Todo</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map((t) => (
        <div key={t.id}>
          <span
            onClick={() => toggleTodo(t.id)}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {t.text}
          </span>

          <button onClick={() => deleteTodo(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoRecoil;