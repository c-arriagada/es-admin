import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Login() {
  function handleOnClick(event) {
    event.preventDefault();
    // navigate to new webpage for user authentication
    window.location.href =
      "https://estilocalico.auth.us-east-2.amazoncognito.com/login?client_id=7nk2p2fkrha638okq6m2tbobir&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fadmin.estilocalico.com";
    // window.location.href =
    //   "https://estilocalico.auth.us-east-2.amazoncognito.com/login?client_id=7nk2p2fkrha638okq6m2tbobir&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost:8080";
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
