import React from "react"
import Email from "./Email";
import Password from "./Password";

function Form(){
    return <div class="container">
    <form action="">
      <div class="container">
        <h2>Login here</h2>
         <Email/>
         <Password/>
         <button type="submit">Login</button>
      </div>
    </form>
  </div>
}

export default Form; 
