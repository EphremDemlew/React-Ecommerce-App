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
  const [name, addName] = new useState("");
  const [email, addEmail] = new useState("");
  const [password, addPass] = new useState("");

  //   function uploadeUser(e) {
  //     e.preventDefault();

  //     console.log("clicked");
  //     axios
  //       .post(`http://localhost:5000/api/user/register`, {
  //         name: name,
  //         email: email,
  //         password: password,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log("error posting");
  //       });
  //   }

  //   function handleButtonClick(event) {
  //     console.log(items);
  //     let data = {
  //       name: name,
  //       email: email,
  //       password: password,
  //     };
  //     let newItems = [...items, data];

  //     addItems(newItems);
  //   }

  const navigate = useNavigate();

  const fetchItems = async () => {
    const resp = await axios.get("http://localhost:5000/api/user");
    addItems(resp.data);

    // setLoading(false);

    // axios.get('http://localhost:5000/items')
    // .then((res2) => {
    //     addItems(res2.data);
    // });
  };

  function handleAddButton(event) {
    // setLoading(true);
    //upload here

    axios
      .post("http://localhost:5000/api/user/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        //call fetchItems
        // reset();
        fetchItems();
        navigate("/");
      })
      .catch((err) => {
        "Error Posting";
      });
  }

  useEffect(() => {
    fetchItems();
  }, []);

  function reset() {
    addName("");
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
          <Title>Register Here</Title>
          <FormInput>
            <form>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(event) => {
                    addName(event.target.value);
                  }}
                  variant="outlined"
                />
              </TextInput>
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
                    type="submit"
                    onClick={handleAddButton}
                  >
                    Register
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
