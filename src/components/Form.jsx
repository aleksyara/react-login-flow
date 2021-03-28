import React from "react";
import Input from "./Input";
import Login from "./Login";

function Form(props) {
  return (
    <div className="container">
      <form className="form">
        {/* {userIsRegistered ? 
        <button type="submit">Login</button>

        :
        <button type="submit">Register</button>
        <Login />
        } */}
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!props.isRegistered && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Form;
