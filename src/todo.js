import React from "react";
import { atom, useRecoilState } from "recoil";

export const todoState = atom({ key: "todoState", default: "" });
export const todosState = atom({ key: "todosState", default: [] });

function Todo() {
  const [todo, setTodo] = useRecoilState(todoState);
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <label title="imported from Todo component">
      Add new {todo ? `[${todo}]` : ""} todo{" "}
      <input
        value={todo}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setTodos([...todos, todo]);
            setTodo("");
          }
        }}
        onChange={(e) => setTodo(e.target.value)}
      />
    </label>
  );
}

export default Todo;
