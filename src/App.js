import React, { useEffect } from 'react';
import Quote from './Components/Quote';
import Button from './Components/Button';
import Header from './Components/Header';
import Filter from './Components/Filter';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [ quote, setQuote ] = useState({text: '', author: ''});
  const [ category, setCategory ] = useState('inspirational');
  const [ tag, setTag ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchQuote ();
  },[tag]);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.quotable.io/random?tags=${tag}`);
      const data = await response.json();
      setQuote(data);

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
      <header className="App-header" >
      <img src={`${process.env.PUBLIC_URL}/left-quote-quote-white-icon-png.jpg`} alt="Logo" className="App-logo" />
      <h1>Quote Generator</h1>
      </header>

      <Filter setTag={setTag} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <Quote quote={quote} />
      )}
      
      <Button fetchQuote={fetchQuote} />
    </div>
  )
} 

  

export default App;
