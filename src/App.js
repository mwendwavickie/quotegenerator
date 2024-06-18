import React, { useEffect } from 'react';
import Quote from './Components/Quote';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [ quote, setQuote ] = useState({text: '', author: ''});
  const [ category, setCategory ] = useState('inspiration');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchQuote ();
  },[category]);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = `https://quote-api-app.herokuapp.com/api/quotes/${category}/random`; // Using Quotable API for category support;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuote ({ text: data.content, author: data.author })

    }catch(error){
      setError('Error fetching the quote. Please try again.');

    } finally {
      setIsLoading(false);

    }
  };


  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className='App'>
      {isLoading && <p>Fetching quote...</p>}
      {error && <p>Error: {error}</p>}
      {quote.text && (
        <>
        <Quote quote={quote} />
        </>
      )}
    </div>
  )
} 

  

export default App;
