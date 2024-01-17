import React from "react";
import { useNavigate } from "react-router-dom";
import Password from "./Password";
import Email from "./Email";

function LoginForm() {
    const navigate = useNavigate();
    return <div class="container">
        <form onSubmit={() => {
            navigate('/HomePage')
        }}>
            <div class="container">
                <h2>Login here</h2>
                <Email />
                <Password />
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
}

export default LoginForm;