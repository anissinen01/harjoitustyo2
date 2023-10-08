import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [cocktail, setCocktail] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const getdata = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => {
      setCocktail(response.data.drinks);
    });
  }
  const getCocktailByName = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputValue).then(response => {
      setCocktail(response.data.drinks);
  });
}
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Generate random cocktail</p>
          <button onClick={getdata}>Generate</button>
          <br></br>
          <p>Search cocktail by name</p>
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="margarita"></input>
          <button onClick={getCocktailByName}>Search</button>
          {cocktail.map((drink) => (
            <div>
              <p>{drink.strDrink}</p>
              <br></br>
              <img src={drink.strDrinkThumb}></img>
              <br></br>
              <p>{drink.strInstructions}</p> 
            </div>
          ))} 
        </div>
      </header>
   </div>
  );
}

export default App;
