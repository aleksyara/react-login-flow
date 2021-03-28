import React from "react";
import Login from "./Login";
import Form from "./Form";

// const isloggedIn = !false;

// Initially we decleare function here, but I refactor it as one line (see line 17)
// function renderCondintionnaly() {
//   if (isloggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// function App() {
//   return (
//     <div className="container">
//       {" "}
//       isloggedIn ? <h1>Hello</h1> : <Login />{" "}
//     </div>
//   );
// }

// export default App;

const userIsRegistered = false;

function App() {
    return (
      <div className="container">
       <Form 
       //give a value to propos attribue 
       isRegistered={userIsRegistered}/>
       
      </div>
    );
  }
  
  export default App;
