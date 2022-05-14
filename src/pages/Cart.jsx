import React, { useEffect, useState } from "react";
import styled from "styled-components";
import banner from "../assets/download.png";

const Cart = ({ onCart, items }) => {
  return (
    <>     <h1>On cart</h1>
          <Cards>
         
        {onCart.map((onCartArray) =>
          onCartArray.map((item) => (
            <CardsItem className="rocket">
              <MyCard>
                <CardImage
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></CardImage>
                <CardContent>
                  <Title>{item.title}</Title>
                </CardContent>
              </MyCard>
            </CardsItem>
          ))
        )}
      </Cards>
    </>
  );
};

export default Cart;

const Cards = styled.ul`
  border: 2px solid red;
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
