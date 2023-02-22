import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  getPokemonByName} from '../../actions/actions';
import styles from "../SearchBar/SearchBar.module.css";



const SearchBar = () => {

  const dispatch = useDispatch();

 

  const [name, setName] = useState('');

 
  const [error, setError] = useState('');

 
  
  const inputHandler = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    if(/^[a-zA-Z]{2,15}$/.test(inputValue)){
        setError("");
    }else{
        setError("Name must be at least 2 characters and less than 15 and either specials characters or numbers")
    } 
    setName(inputValue);  
  };
  
  const submitHandler = (event) => {
   event.preventDefault();
   dispatch(getPokemonByName(name));
   setName('');
    
  }

  return (
    <div>
      
        <div  className={styles.searchbar}>
          <form onSubmit={(e) => submitHandler(e)} >
            <div className={styles.text}>
           
            <input 
              type="text"
              placeholder= "🔍 Search your Pokemon...."
              onChange={(e) => inputHandler(e)}
              value={name}
            />
            </div>
            {/*  { error && <p className={styles.p_error}>{error}</p>} */}   
            <button type="submit" disabled={error} className={styles.btn_search}>Search Pokemon</button>

          </form>
        </div>
      
        
      </div>
    
  )
}

export default SearchBar
