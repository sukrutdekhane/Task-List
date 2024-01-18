import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

function LoginForm() {
    const navigate = useNavigate();
    return <div class="container">
        <form onSubmit={() => {
            navigate('/HomePage')
        }}>
            <div class="container">
                <h2>Login here</h2>
                <Input label="Email" for="email" type="email" placeholder="Enter email" name="email" required />
                <Input label="Password" for="password" type="password" placeholder="Enter password" name="password" required />
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
}

export default LoginForm;