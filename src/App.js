import './App.css';
import Quotes from "./Components/Quotes.json";
import React, {userState, useState} from "react";
import QuoteFrame from './Components/Quoteframe';
import Button from './Components/Button';

function App() {
  
  let quoteNumber = Math.floor(Math.random() * Object.keys(Quotes.quotes).length);

  const [quote, setQuote] = useState(Quotes.quotes[quoteNumber]);
  

 

  function changeQuote(){
    quoteNumber = Math.floor(Math.random() * Object.keys(Quotes.quotes).length);
    setQuote(Quotes.quotes[quoteNumber]);
    
  }

  return (
    <div className="App">
      <div style={{backgroundColor: "blue"}} >
        <QuoteFrame text={quote}/>
        <Button another={changeQuote}/>
      </div>
    </div>
  );
}

export default App;
