import React from "react";
import CheckButton from "./components/CheckButton";
import Button from "./components/Button";
import Tag from "./components/Tag";

import './App.css';

function App() {
  return (
    <div>
      <h1>Hello Liberaí</h1>
      <CheckButton />
      <Button color='var(--pink-color)'>Click me</Button>
      <Tag >+ 354</Tag>
    </div>
  );
}

export default App;
