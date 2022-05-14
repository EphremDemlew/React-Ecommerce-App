import React, { useState, useEffect } from "react";
import undraw from "../assets/ill.svg";
import styled from "styled-components";
import { TextField, Button, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

const items_default = [];

const Register = () => {
  const [items, addItems] = new useState(items_default);
  const [title, addTitle] = new useState("");
  const [categories, addCategories] = new useState("");
  const [description, addDescription] = new useState("");
  const [img, addImg] = new useState("");
  const [price, addPrice] = new useState("");

  const fetchItems = async () => {
    // setLoading(false);

    axios.get("http://localhost:5000/api/user").then((res) => {
      addItems(res.data);
    });
  };

  function handleAddButton(event) {
    // setLoading(true);
    //upload here
    axios
      .post("http://localhost:5000/api/products", {
        title: title,
        categories: categories,
        description: description,
        price: price,
        img: img,
      })
      .then((result) => {
        console.log(result);
        //call fetchItems
        // reset();
        fetchItems();
      })
      .catch((err) => {
        "Error Posting";
      });
  }

  useEffect(() => {
    fetchItems();
  }, []);

  function reset() {
    addTitle("");
    addCategories("");
    addDescription("");
    addImg("");
    addPrice("");
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
          <Title>Add Products Here</Title>
          <FormInput>
            <form>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Name of Product"
                  name="title"
                  value={title}
                  onChange={(event) => {
                    addTitle(event.target.value);
                  }}
                  variant="outlined"
                />
              </TextInput>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Image"
                  name="img"
                  value={img}
                  onChange={(event) => {
                    addImg(event.target.value);
                  }}
                  variant="outlined"
                />
              </TextInput>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Category"
                  name="categories"
                  value={categories}
                  onChange={(event) => {
                    addCategories(event.target.value);
                  }}
                  variant="outlined"
                />
              </TextInput>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  name="price"
                  value={price}
                  onChange={(event) => {
                    addPrice(event.target.value);
                  }}
                  variant="outlined"
                />
              </TextInput>
              <TextInput>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  type="string"
                  name="Description"
                  variant="outlined"
                  value={description}
                  onChange={(event) => {
                    addDescription(event.target.value);
                  }}
                />
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
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={reset}
                    >
                      Reset
                    </Button>
                  </Btn>
                </TextInput>
              </TextInput>
            </form>
          </FormInput>
        </SignIn>
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

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -10rem;
`;
const Back = styled.div`
  margin: 2rem;
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
