import React from "react";
import "./index.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue("");
  };
  console.log(value);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        className={"input"}
        value={value}
        placeholder="Add Todo ..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
