import React from "react";
import Nav from './Nav';
import Jumbotron from './Jumbotron';
import SearchBox from './SearchBox';
import Results from './Results';

function Search() {
  return (
    <div className="container">
      <Nav />
      <Jumbotron />
      <SearchBox />
      <Results />
    </div>
  );
}

export default Search;