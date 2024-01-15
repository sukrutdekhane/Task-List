import React from "react"
import Email from "./Email";
import Password from "./Password";
import { useNavigate} from "react-router-dom";


function Form(){
    const navigate=useNavigate();
    return <div class="container">
    <form onSubmit={()=>{
      navigate('/HomePage')
    }}>
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
