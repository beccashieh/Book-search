import React from "react";

function SearchedCard (props) {
  if (props.searchedBooks.length > 0){
    props.searchedBooks.map(searchedbook => {
      return (
        <div className="col-md-8 card">
          <div className="col-md-4 bookImage">
            <img src={searchedbook.image} alt={searchedbook.title} />
          </div>
          <div className="card-body book-info">
            <h2 className="card-title">{searchedbook.Title}</h2>
            <h3 className="bookAuthor">{searchedbook.authors}</h3>
            <p className="card-text bookDescription">{searchedbook.description}</p>
            <button type="button" className="btn btn-info">Search</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      )
    }
    )}
  else {
    return (
      <div className="card">
      <div className="article">
        <h2>Your Searched Books</h2>
        <h4>Your search returned no books.</h4>
      </div>
    </div>
    )
  }
} 

export default SearchedCard;
