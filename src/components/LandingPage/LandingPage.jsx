import React from 'react'
import { Link } from 'react-router-dom'
import style from "./LandingPage.module.css"
import landingImage from "../image/pikachu.webp"
import logoPokemon from "../image/International_Pokémon_logo.svg.png"
import styles from "./LandingPage.module.css"

const LandingPage = () => {
  return (

    
    <div className={styles.container} >
        
        <Link to={'/home'}>
        <button className={style.btn_landing}>Start!!</button>
        </Link> 

       <img src={logoPokemon} alt="logo_pokemon" width={"400px"} height={"200px"} />
        
      

       <img src={landingImage} alt="image_pokemon" width={"300px"} height={"300px"} className={styles.pikachu} />  

      

      </div>
       
    

  )
}

export default LandingPage
