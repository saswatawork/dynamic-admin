import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Input } from "components/atoms";
import { Button, ButtonType } from "components/atoms/Button";
import { StateContext } from "components/utils/stateContext";
import { ADMIN_URL } from "config";
import "./Login.scss";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const { setLoginStatus } = useContext(StateContext);
  const [loginResponse, setLoginResponse] = useState({});
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleLogin = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      axios.post(`${ADMIN_URL}users/login`, user).then(res => {
        setLoginResponse(res.data);
        if (res.data && res.data.status && res.data.status === "success") {
          localStorage.setItem("isLoggedIn", true);
          setLoginStatus(true);
        }
      });
    }
    setValidated(true);
  };

  return (
    <Form
      className="login"
      noValidate
      validated={validated}
      onSubmit={handleLogin}
    >
      <h4 className="title">Login</h4>
      {loginResponse && (
        <p className={loginResponse.status}>{loginResponse.message}</p>
      )}
      <Input
        required
        type="text"
        name="username"
        label="Username"
        id="login-username"
        value={user.username}
        onChange={event => setUser({ ...user, username: event.target.value })}
      />
      <Input
        required
        type="password"
        name="password"
        id="login-password"
        value={user.password}
        label="Password"
        onChange={event => setUser({ ...user, password: event.target.value })}
      />
      <Button type={ButtonType.SUBMIT}>Login</Button>
    </Form>
  );
};

export default Login;
