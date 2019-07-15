import React from 'react';
import SearchedCard from './SearchedCard';
import SavedCard from './SavedCard';

function Results () {
    return (
        <div className="container">
        <SearchedCard />
        <SavedCard/>
        </div>
    )
}

export default Results;