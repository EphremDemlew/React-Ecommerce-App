import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "@mui/material";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-family: "Black Ops One", cursive;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>uSell</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos debitis
          aliquid eveniet suscipit error.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link
              href="http://localhost:3000/"
              style={{ color: "#333", textDecoration: "none" }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="http://localhost:3000/register"
              style={{ color: "#333", textDecoration: "none" }}
            >
              Register
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> BiT Bahir-Dar , Ethiopia
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +251 924 472 257
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> ephyaabb@gmail.com
          <MailOutline style={{ marginRight: "10px" }} /> solenitufa@gmail.com
          <MailOutline style={{ marginRight: "10px" }} /> hameresmart@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
