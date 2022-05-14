import React from "react";
import axios from "axios";

export default class PersonAdd extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState(event.target.value);
    console.log(this.name);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

     
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" >Register</button>
        </form>
      </div>
    );
  }
}
