import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './App.css';
import sideimage from "./log_banner.png"
import { useSpring } from "react-spring";
import logo from "./logo.png"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  const [registrationFormStatus] = useState(false);
  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px rgb(30, 81, 51, 1)",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px rgb(30, 81, 51, 1)"
      : "solid 0px transparent", //Animate bottom border of register button
  
    });

  return (
    <div> 
      <div id="logo">
    <img src={logo} alt="side-image" width="200px"/>
  </div>
{/* 
<div className="form-container sign-up-container">
<h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="first-name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="last-name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div> */}

<div className="wrapper">
            <div className="left">

            <img src={sideimage} alt="side-image" width="511px"/>
            </div>
            <div className="right">
      <Card className="card">
        <Card.Body className="card-body">
          {/* <h2 className="text-center mb-4">Sign Up</h2> */}
          <div className="nav-buttons">
          <Link to="/login"   style={loginBtnProps} className="nav-buttons" id="login">LogIn</Link>
          <Link to="/signup"   style={registerBtnProps} className="nav-buttons" id="signup">Register</Link>
          {error && <Alert variant="danger" className="alert-danger">{error}</Alert>}
      </div>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={handleSubmit} id="form">
          <Form.Group id="first-name">
              {/* <Form.Label>First Name</Form.Label> */}
              <Form.Control className="inputs" placeholder="First Name" type="name" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="last-name">
              {/* <Form.Label>Last Name</Form.Label> */}
              <Form.Control className="inputs" placeholder="Last Name" type="name" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="username">
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control className="inputs" placeholder="Username" type="username" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="emaill">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control className="inputs" placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control className="inputs" placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              {/* <Form.Label>Password Confirmation</Form.Label> */}
              <Form.Control className="inputs" placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            &nbsp;
            <Button disabled={loading} className="w-100" type="submit" id="logi">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {/* <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
      </div>
    </div>
    </div>
  )
}