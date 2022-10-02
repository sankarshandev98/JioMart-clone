import React from "react";
import styles from "./Navbar.module.css";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, toggleAuth, setAuth, token, isAuth } =
    useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let url = `https://reqres.in/api/login`;
    let data = {
      email: email,
      password: password,
    };
    const param = {
      method: "Post",
      headers: {
        "content-type": "application/json;charset = UTF-8",
      },
      body: JSON.stringify(data),
    };
    const sendRequest = await fetch(url, param);
    const response = await sendRequest.json();
    if (response.token.length > 0) {
      setToken(response.token);
      toggleAuth();
    }
    console.log(response);
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.loginDiv}>
      <div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
