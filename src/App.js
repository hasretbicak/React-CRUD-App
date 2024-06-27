import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Users from "./components/Users";
import AddUser from "./components/AddUser.js";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />

        <AddUser></AddUser>
        <Users />
      </div>
    );
  }
}
