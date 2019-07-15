import React from "react";

function SavedCard (props) {
  if (props.savedBooks.length > 0){
    props.savedBooks.map(savedbook => {
      return (
        <div className="col-md-8 card">
          <div className="col-md-4 bookImage">
            <img src={savedbook.image} alt={savedbook.title} />
          </div>
          <div className="card-body book-info">
            <h2 className="card-title">{savedbook.Title}</h2>
            <h3 className="bookAuthor">{savedbook.authors}</h3>
            <p className="card-text bookDescription">{savedbook.description}</p>
            <button type="button" className="btn btn-info">View</button>
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
        <h2>Your Saved Books</h2>
        <h4>You have no saved books.</h4>
      </div>
    </div>
    )
  }
} 

export default SavedCard;