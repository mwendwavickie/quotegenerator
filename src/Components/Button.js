import React from "react";

const Button = ({ fetchQuote }) => {
    const shareQuote = () => {
        const quoteText = document.querySelector('.quote-text').innerText;
        const quoteAuthor = document.querySelector('.quote-author').innerText;
        const shareData = {
            title:'Quote',
            text:`${quoteText} ${quoteAuthor}`,
            url: window.location.href,
        };
        navigator.share(shareData).catch(console.error)

    };
    return (
        <div className="button-container">
            <button onClick={fetchQuote}>New Quote</button>
            <button onClick={shareQuote}>
            <i className="fas fa-share-alt"></i>Share Quote
            </button>
        </div>
    )

}
 export default Button;