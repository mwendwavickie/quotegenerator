import React from "react";

const Quote = ({ quote }) => {
    return (
        <div className="quote-container">
            <p className="quote-text">{quote.content} </p>
            <p className="quote-author"> ~{quote.author} </p>
        </div>
    )
}

export default Quote;