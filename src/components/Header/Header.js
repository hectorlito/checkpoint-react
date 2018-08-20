import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Header 1</h1>
        <nav>
          <p>
            <Link to={"/"}>Link</Link>
          </p>
          <p>
            <Link to={"/new-contact"}>Link</Link>
          </p>
        </nav>
      </div>
    );
  }
}

export default Header;
