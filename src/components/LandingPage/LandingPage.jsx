import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
import landingImage from '../image/pikachu.webp';
import logoPokemon from '../image/International_Pokémon_logo.svg.png';
import styles from './LandingPage.module.css';
/* import Confetti from 'react-confetti';
 */
const LandingPage = () => {

  /*  useEffect(()=>{
    console.log("el componete se renderiza");
    <Confetti/>
   },[]) */


  return (
    <div className={styles.container}>
     

      <img src={logoPokemon} className={styles.logo} alt="logo_pokemon" />

      <img
        src={landingImage}
        alt="image_pokemon"
        width={'300px'}
        height={'300px'}
        className={styles.pikachu}
      />

      <Link to={'/home'}>
        <button className={style.btn_landing}>Start!!</button>
      </Link>
    </div>
  );
};

export default LandingPage;
