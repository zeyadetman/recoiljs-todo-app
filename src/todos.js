import React from "react";
import { atom, useSetRecoilState, useRecoilValue, selector } from "recoil";
import { todosState } from "./todo";

const addedString = atom({ key: "addedString", default: "" });

const addedStringTodos = selector({
  key: "addedStringTodos",
  get: ({ get }) => {
    const todos = get(todosState);
    const addedStringValue = get(addedString);

    return todos.map((todo) => todo + "-" + addedStringValue);
  },
});

function Todos() {
  const setAddedString = useSetRecoilState(addedString);
  const todos = useRecoilValue(todosState);
  const modifiedTodos = useRecoilValue(addedStringTodos);

  return (
    <>
      <div title="todos state intially created in Todo Component, shown from Todos component">
        <h2>All Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          All Todos Appended this String{" "}
          <input onChange={(e) => setAddedString(e.target.value)} />
        </h2>
        <ul>
          {modifiedTodos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
