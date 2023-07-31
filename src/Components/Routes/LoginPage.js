import React, { useState, useRef, useContext } from "react";
import { Container, Card, Form, Button, Image } from "react-bootstrap";
import { AuthContext } from "../Store/AuthContextProvider";
import "./LoginPage.css";
import loginBackground from "../Images/loginBackground.jpg";

const LoginPage = () => {
  const AuthCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const existingAccHandler = () => {
    setIsExistingUser((prevState) => !prevState);
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      isLogin
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbSqObcg_2-UGjILn68B2WoAj91HSoQBE"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbSqObcg_2-UGjILn68B2WoAj91HSoQBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("error")) {
          console.log(data);
          alert(data.error.message);
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
        } else {
          console.log(data);
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
          AuthCtx.login(data.idToken);

          if (isLogin) {
            alert("Login successful");
            setIsLogin(false);
          } else {
            if (data.error && data.error.message === "EMAIL_EXISTS") {
              alert("Email exists & login successful");
            } else {
              alert("Sign up successful");
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
      });
  };

  return (
    <>
    <div className="img">
    <Image src={loginBackground} alt="login" className="img" />
    </div>
      <div className="login-page">
        <Container className="main-container" >
          <Card className="card">
            <Card.Header className="card-header">
              {isLogin || isExistingUser ? <h4>Sign In</h4> : <h4>Sign Up</h4>}
            </Card.Header>
            <Form onSubmit={submitHandler}>
              <Card.Body>
                <Form.Group>
                  <Form.Label className="form-label">
                    <h6>Your Email:</h6>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    ref={emailInputRef}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="form-label">
                    <h6>Your Password:</h6>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className="form-control"
                    ref={passwordInputRef}
                  />
                </Form.Group>
                {isLogin || isExistingUser ? (
                  <Button type="submit" className="button">
                    Log In
                  </Button>
                ) : (
                  <Button type="submit" className="button">
                    Create New Account
                  </Button>
                )}
              </Card.Body>
              <Card.Footer className="card-footer">
                {!isExistingUser ? (
                  <p onClick={existingAccHandler} className="card-footer-link">
                    Log in with an existing account
                  </p>
                ) : (
                  <p onClick={existingAccHandler}>New User?</p>
                )}
              </Card.Footer>
            </Form>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
