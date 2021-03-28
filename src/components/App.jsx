import React from "react";
import Input from "./Input";
import Login from "./Login";

const isloggedIn = false;

function renderCondintionnaly() {
  if (isloggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderCondintionnaly()}</div>;
}

export default App;
