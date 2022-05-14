import { Badge, Button, Link } from "@mui/material";
// import { Search, ShoppingCartOutlined } from "@mui/material/icons";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bolder;
  //   font-family: "Supermercado One", cursive;
  font-family: "Black Ops One", cursive;
  color: #333;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = ({ cart }) => {
  return (
    <Wrapper>
      <Left>
        <SearchContainer>
          <Input
            placeholder="Search"
            style={{ background: "#eee", outline: "none" }}
          />
          <SearchIcon
            style={{ color: "black", fontSize: 28, marginLeft: "10px" }}
          />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>uSell</Logo>
      </Center>
      <Right>
        <MenuItem>
          <Link
            href="http://localhost:3000/register"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="http://localhost:3000/login"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Sign In
          </Link>
        </MenuItem>

        <MenuItem>
          <Link
            href="http://localhost:3000/addProducts"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button
              style={{ color: "white" }}
              variant="contained"
              startIcon={<AddIcon style={{ color: "white" }} />}
            >
              Add Products
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Badge badgeContent={cart} color="primary">
            <ShoppingCartIcon style={{ color: "#333" }} />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
