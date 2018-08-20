import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import Contact from "../Contact/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <p>app</p>
        </div>
        <div>
          <Header />
        </div>
        <main>
          <Route path="/" component={ContactList} />
          <Route path="/new-contact" component={NewContact} />
        </main>
      </div>
    );
  }
}

export default App;
