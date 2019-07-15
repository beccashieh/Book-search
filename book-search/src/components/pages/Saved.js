import React, { Component } from "react";
import Nav from '../Nav';
import Jumbotron from '../Jumbotron';
import Results from '../Results';
import API from "../../utils/API";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <Jumbotron />
        <Results />
      </div>
    );
  }
}


export default Saved;
