import React from "react";

function Password(){
    return <>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
    </>
}

export default Password;