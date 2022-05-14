import { Link } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [item, setItems] = useState([]);

  axios
    .get("/api/products")
    .then((res) => {
      setItems(res.data);
      console.log(item);
    })
    .catch((err) => {
      console.log("Failed to loade.");
    });
};

function ItemCard() {
  return (
    <div>
      <Link href="http://localhost:3000/">Home</Link>
      <div></div>
    </div>
  );
  useEffect(() => {
    FetchData();
  }, []);
}

export default ItemCard;
