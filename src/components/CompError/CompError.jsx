import React from "react";
import styles from "./CompError.module.css"
import pokemonCat from "../image/Snorlax.webp"
import {Link} from "react-router-dom"

 class ComponenteError extends React.Component{
   
    render(){
           
  return (
    <div className={styles.container} >
      <div className={styles.errorInfo}>
        <h1 className={styles.title}>ERROR</h1>
        <h1 className={styles.number}>4</h1>
          <img src={pokemonCat} alt="image_error" width={"200px"} height={"200px"}/>
        <h1 className={styles.number}>4</h1>
      </div>
      <Link to={"/home"}>
      <button>Come Back Home!!</button>
      </Link>
      
    </div>
        )
    }
};

export default ComponenteError