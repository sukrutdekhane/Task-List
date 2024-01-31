import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <div class="container">
      <form
        className="loginPage"
        onSubmit={() => {
          navigate("/HomePage");
        }}
      >
        <h2>Login here</h2>
        <div className="emailContainer">
          <Input
            label="Email"
            for="email"
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </div>
        <div className="passwordContainer">
          <Input
            label="Password"
            for="password"
            type="password"
            placeholder="Enter password"
            name="password"
            required
          />
        </div>
        <div className="loginButtoncontainer">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
