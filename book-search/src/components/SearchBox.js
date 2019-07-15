import React from 'react';

function SearchBox () {
    return (
        <form>
            <div className="form-group">
                <label for="search-entry">Which book would you like to search?</label>
                <input type="email" className="form-control" id="search-entry" placeholder="Ex: To Kill a Mockingbird"/>
            </div>
            <button type="button" class="btn btn-info">Search</button>
        </form>
        )
}

export default SearchBox;