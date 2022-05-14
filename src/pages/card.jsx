import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import banner from "../assets/download.png";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const items_default = [];

const Card = ({ cart, setCart, items, addItems, setOnCart, onCart,addItemToCart }) => {
  const [name, addName] = new useState("");
  const [email, addEmail] = new useState("");
  const [password, addPass] = new useState("");

  const fetchItems = () => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      addItems(res.data);
      console.log(res.data);
    });
  };
 
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <Cards>
        {items.map((items) => (
          <CardsItem className="rocket" key={items._id}>
            <MyCard>
              <CardImage
                style={{
                  backgroundImage: `url(${items.img})`,
                }}
              ></CardImage>
              <CardContent>
                <Title>{items.title}</Title>
                <CardText>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id.
                </CardText>
                <Buy>
                  <Price>${items.price}</Price>
                  <Button
                    size="small"
                    style={{
                      color: "black",
                      border: "1px solid black",
                    }}
                    variant="outlined"
                    startIcon={<ShoppingCartIcon style={{ color: "black" }} />}
                    onClick={addItemToCart}
                    value={items._id}
                  >
                    Add to cart
                  </Button>
                </Buy>
              </CardContent>
            </MyCard>
          </CardsItem>
        ))}
      </Cards>
    </>
  );
};

export default Card;

const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Price = styled.p`
  font-weight: bold;
`;
const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0 0 0;
`;
const CardsItem = styled.ul`
  //   display: flex;
  padding: 1rem;
  height: 500px;
  //   overflow: hidden;
  min-width: 25%;
  max-width: 25%;
`;
const CardImage = styled.div`
  //   background-image: url(${banner});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%;
    }
  }
`;
const MyCard = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    ${CardImage} {
      filter: contrast(100%);
    }
  }
`;
const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const Title = styled.div`
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;
