import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "../redux/crudSlice";

function CrudRedux() {
  const items = useSelector((state) => state.crud.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Redux Toolkit CRUD</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(addItem(input))}>Add</button>

      {items.map((item) => (
        <div key={item.id}>
          {item.text}
          <button onClick={() => dispatch(deleteItem(item.id))}>
            Delete
          </button>
          <button
            onClick={() =>
              dispatch(updateItem({ id: item.id, text: "Updated" }))
            }
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default CrudRedux;