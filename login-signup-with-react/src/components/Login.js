import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './App.css';
import sideimage from "./log_banner.png"
import { useSpring } from "react-spring";
import logo from "./logo.png"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
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

    // const loginProps = useSpring({ 
    //   left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    // });
    // const registerProps = useSpring({
    //   left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
    // });

  return (
    <div id="fulll">
        <div id="logo">
          <img src={logo} alt="side-image" width="200px"/>
        </div>

        <div className="wrapper">
            <div className="left">
                <img src={sideimage} alt="side-image" width="511px"/>
            </div>
            <div className="right">

      <Card className="card">
        <Card.Body className="card-body">
          {/* <h2 className="text-center mb-4">Log In</h2> */}
          <div className="nav-buttons">
          <Link to="/login"   style={loginBtnProps} className="nav-buttons" id="login">LogIn</Link>
          <Link to="/signup"   style={registerBtnProps} className="nav-buttons" id="signup">Register</Link>
     
          {error && <Alert variant="danger" className="alert-danger">{error}</Alert>}
      </div>
          <Form onSubmit={handleSubmit} id="form">
            <Form.Group id="email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control className="inputs" placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control className="inputs" placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            &nbsp;
            <Button disabled={loading} className="w-100" type="submit" id="logi">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3" id="forgot">
            <Link to="/forgot-password" className="forgot">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      {/* <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
            </div>
        </div>



     

        
    </div>
  )
}