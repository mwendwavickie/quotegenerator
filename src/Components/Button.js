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

    const shareOnTwitter = () => {
        const quoteText = document.querySelector('.quote-text').innerText;
        const quoteAuthor = document.querySelector('.quote-author').innerText;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quoteText} - ${quoteAuthor}`)}`;
        window.open(url, '_blank');
      };

      

    return (
        <div className="button-container">
            <button onClick={fetchQuote}>New Quote</button>
            <button onClick={shareOnTwitter}>
            <i className="fab fa-twitter"></i> Share on Twitter
            </button>
            
            
        </div>
    )

}
 export default Button;