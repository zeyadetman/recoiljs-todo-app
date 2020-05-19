import React from "react";
import "./App.css";
import Todo from "./todo";
import Todos from "./todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://recoiljs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RecoilJS TodoList App
        </a>
      </header>
      <Todo />
      <Todos />
    </div>
  );
}

export default App;
