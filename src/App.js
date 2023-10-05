 import React from 'react';
import './App.css';
import quoteData from './data';
 let newQuote
function App() {
  const[generatedQuote,setgeneratedQuote] = React.useState("Love your family, work super hard, and live your passion. -Gary Vaynerchuk")
  function generateQuote (){
    const quoteArray = quoteData
    const randomNum = Math.floor(Math.random() * quoteArray.length)
    newQuote = quoteArray[randomNum]
    setgeneratedQuote(newQuote)

  }
    return (
    <div className="app">
       <div className='container'>
       <div className='circle'></div>
        <h2 className='head'>QUOTES </h2>
        <p className='quote'>{generatedQuote}</p>
        <button className='button' onClick={generateQuote}>New Quote</button>
       </div>
    </div>
  );
}

export default App;
