import React, { useState, useEffect } from "react";
import undraw from "../assets/ill.svg";
import styled from "styled-components";
import { TextField, Button, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const items_default = [];

const Register = () => {
  const [items, addItems] = new useState(items_default);
  const [email, addEmail] = new useState("");
  const [password, addPass] = new useState("");
  const [loginStatus, addLoginStatus] = new useState("");

  const navigate = useNavigate();

  //   const fetchItems = async () => {
  //     const resp = await axios.get("http://localhost:5000/api/user");
  //     addItems(resp.data);
  //   };

  function handleAddButton(event) {
    // setLoading(true);
    //upload here
    axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        //call fetchItems
        reset();
        // fetchItems();
        if (result.data === "Loged in sucessfully ") {
          navigate("/");
        } else {
          addLoginStatus(result.data);
        }
      })
      .catch((err) => {
        "Password or Email is Incorrect.";
      });
  }

  //   useEffect(() => {
  //     fetchItems();
  //   }, []);

  function reset() {
    addEmail("");
    addPass("");
  }
  return (
    <>
      <Back>
        <Link
          href="http://localhost:3000/"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon style={{ color: "white" }} />}
          >
            Back to Home
          </Button>
        </Link>
      </Back>
      <Section>
        <SignIn>
          <Title>Log In</Title>
          <FormInput>
            <form>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => {
                    addEmail(event.target.value);
                  }}
                  variant="outlined"
                />
              </TextInput>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  value={password}
                  onChange={(event) => {
                    addPass(event.target.value);
                  }}
                />
              </TextInput>
              <TextInput>
                <Btn>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAddButton}
                  >
                    Log In
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={reset}>
                    Reset
                  </Button>
                </Btn>
              </TextInput>
            </form>
          </FormInput>
        </SignIn>
        <Image>
          <img src={undraw} alt="" />
        </Image>
      </Section>
      <h5
        style={{
          color: "red",
          textAlign: "center",
          position: "absolute",
          marginTop: "-8rem",
          left: "18rem",
        }}
      >
        {loginStatus}
      </h5>
    </>
  );
};

export default Register;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;
const Btn = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;
const Back = styled.div`
  margin: 2rem;
`;
const Image = styled.div`
  img {
    width: 100vh;
    margin-top: 5rem;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -5rem;
`;
const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vh;
  margin: 1rem;
`;
const FormInput = styled.div``;
