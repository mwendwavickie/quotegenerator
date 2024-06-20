import React, { useEffect } from 'react';
import Quote from './Components/Quote';
import Button from './Components/Button';
import Header from './Components/Header';
import Filter from './Components/Filter';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [ quote, setQuote ] = useState({text: '', author: ''});
  const [ category, setCategory ] = useState('inspiration');
  const [ author, setAuthor ] = useState('');
  const [ keyword, setKeyword ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchQuote ();
  },[category]);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = `https://api.quotable.io/random`; // Using Quotable API for category support;
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
      <Header />
      <Filter 
        setCategory={setCategory} 
        setAuthor={setAuthor} 
        setKeyword={setKeyword} 
      />
      {isLoading && <p>Fetching quote...</p>}
      {error && <p>Error: {error}</p>}
      {quote.text && (
        <>
        <Quote quote={quote} />
        </>
      )}
      <Button fetchQuote={fetchQuote} />
    </div>
  )
} 

  

export default App;
