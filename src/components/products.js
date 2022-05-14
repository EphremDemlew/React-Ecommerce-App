import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "@emotion/styled";
// import mobiscroll from "@mobiscroll/react-lite";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/products`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} <img src={post.img} alt="img" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
// // export default class PersonList extends React.Component {
// //   state = {
// //     persons: []
// //   }

// //   componentDidMount() {
// //     axios.get(`/api/products`)
// //       .then(res => {
// //         const persons = res.data;
// //         this.setState({ persons });
// //       })
// //   }

// //   render() {
// // return (
// //   <ul>
// //     {
// //       this.state.persons
// //         .map(person =>
// //           <li key={person.id}>{person.title}</li>
// //         )
// //     }
// //   </ul>
// // )
// //   }
// // }
