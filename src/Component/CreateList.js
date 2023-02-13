import { useSelector } from "react-redux";
import { selectUser } from "../App/useSlice";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../App/useSlice";

import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";


export default function CreateList() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (user) {
    return user;
  } else {
    const token1 = localStorage.getItem("token");
    if (token1) {
      const user = jwt(token1);
      console.log(user.email);
      dispatch(
        login({
          email: user.email,
          password: user.password,
        })
      );
    } else {
      return null;
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
     
    dispatch(login({
      email: user.email,
      password:user.password
    }));
  };

  return (
    <>
      <Container className="border mt-5">
        <Form className="bod" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="name" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
          </Form.Group>
          <center>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </center>
        </Form>
      </Container>
    </>
  );
}
