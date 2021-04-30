import React from 'react';
import NameCard from '../NameCard/NameCard';
import './Results.css';

const Results = ({suggestedNames}) => {
    const suggestedNamesJSX = suggestedNames.map(suggestedName =>{
        return(
            <NameCard key={suggestedName} suggestedName={suggestedName}/>
        )
    })

    return (
        <div className="results-container">
            {suggestedNamesJSX}
        </div>
    )
}

export default Results
