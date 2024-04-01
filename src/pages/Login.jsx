import React, { useState } from "react"

function Login() {

    function handleOnClick(event) {
        event.preventDefault();
        // navigate to new webpage for user authentication
        // window.location.href = "https://estilocalico.auth.us-east-2.amazoncognito.com/login?client_id=7nk2p2fkrha638okq6m2tbobir&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fadmin.estilocalico.com"
        window.location.href = "https://estilocalico.auth.us-east-2.amazoncognito.com/login?client_id=7nk2p2fkrha638okq6m2tbobir&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost:8080"
    }

    return ( 
        <div className="loginPage">
            <button onClick={handleOnClick} className="loginBtn">Login</button>
        </div>
    )
}

export default Login;