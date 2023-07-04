import React from "react";
import "./index.css";

function Todo({ todo, index, remove }) {
  function handle() {
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
      {todo.text} (-)
    </div>
  );
}
export default Todo;
