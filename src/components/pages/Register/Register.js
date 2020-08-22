import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button, ButtonType, Input } from "components/atoms";
import { StateContext } from "components/utils/stateContext";
import { ADMIN_URL } from "config";
import "./Register.scss";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const { setLoginStatus } = useContext(StateContext);
  const [regiterRes, setRegisterRes] = useState({});
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    password: ""
  });

  const handleRegister = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      axios.post(`${ADMIN_URL}users`, { admin_user: user }).then(res => {
        setRegisterRes(res.data);
        localStorage.setItem("isLoggedIn", true);
        setLoginStatus(true);
      });
    }

    setValidated(true);
  };

  return (
    <div className="registration">
      <Form noValidate validated={validated} onSubmit={handleRegister}>
        <h4 className="title"> Sign Up</h4>
        {regiterRes && (
          <p className={regiterRes.status}>{regiterRes.message}</p>
        )}
        <Input
          required
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First Name"
          value={user.firstName}
          onChange={event =>
            setUser({ ...user, first_name: event.target.value })
          }
        />
        <Input
          required
          type="text"
          id="last-name"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={event =>
            setUser({ ...user, last_name: event.target.value })
          }
        />
        <Input
          required
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={event => setUser({ ...user, email: event.target.value })}
        />
        <Input
          required
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={event => setUser({ ...user, phone: event.target.value })}
        />
        <Input
          required
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={user.username}
          onChange={event => setUser({ ...user, username: event.target.value })}
        />
        <Input
          required
          type="password"
          name="password"
          id="password"
          value={user.password}
          placeholder="Password"
          onChange={event => setUser({ ...user, password: event.target.value })}
        />
        <Button type={ButtonType.SUBMIT} className="form-input">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
