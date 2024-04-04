import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AUTH_SERVER = "https://estilocalico.auth.us-east-2.amazoncognito.com";
const CLIENT_ID = "7nk2p2fkrha638okq6m2tbobir";
const URL = FRONTEND_URL;
const SCOPE = 'email+openid+phone'

function Login() {
  function handleOnClick(event) {
    event.preventDefault();
    // navigate to new webpage for user authentication
    window.location.href = `${AUTH_SERVER}/login?client_id=${CLIENT_ID}&response_type=code&scope=${SCOPE}&redirect_uri=${encodeURIComponent(
      URL
    )}`;
  }

  return (
    <div className="loginPage">
      <Card sx={{ minWidth: 275 }} elevation={8}>
        <Typography
          variant="h5"
          padding={3}
          color="text.secondary"
          gutterBottom
        >
          Estilo Calico Admin Portal
        </Typography>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="large" variant="contained" onClick={handleOnClick}>
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
