import React, { Component } from "react";
import Nav from '../Nav';
import Jumbotron from '../Jumbotron';
import SearchBox from '../SearchBox';
import Results from '../Results';
import API from "../../utils/API";

class Search extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Jumbotron />
        <SearchBox />
        <Results />
      </div>
    );
  }
}


export default Search;