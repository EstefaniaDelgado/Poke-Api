import React, { useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterCreated,
  filterPokemonByType,
  getPokemons,
  getTypes,
  orderByAttack,
  orderByHp,
  orderByName,
} from '../../actions/actions'
import { Link } from 'react-router-dom'
import CardPokemon from '../CardPokemon/CardPokemon'
import Paginado from '../Paginado/Paginado'
import SearchBar from '../SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css"
import International_Pokémon_logo from "../image/International_Pokémon_logo.svg.png"
import loadingPokebola from "../image/caf1f2d.gif"



const Home = () => {

  const dispatch = useDispatch();
  
   
  const allPokemons = useSelector((state) => state.pokemons);
 
  const allTypes = useSelector((state) => state.types);


  
  //creación de estados locales:
  const [currentPage, setCurrentPage] = useState(1);
  
  const [pokemonsPerPage, /* setPokemonsPerPage */] = useState(12);

  //creo otro estado para el ordenamiento:
 const [order, setOrder] = useState('');

  // constantes para  el paginado:
  const indexOfLastPokemon = currentPage * pokemonsPerPage 
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage 
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon,
  );

 
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //traerme todos los pokemons cuando el componente se monta, este dispatch es lo mismo que hacer el mapDispatchToProps
  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getTypes())
  }, [dispatch])

 

  const [isActive, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!isActive);
  };

  
  const clickHandler = (event) => {
    event.preventDefault()
    dispatch(getPokemons())
  }

  //filter by type
  const filterHandler = (event) => {
     event.preventDefault();
     dispatch(filterPokemonByType(event.target.value));
     setCurrentPage(1);
     setOrder(event.target.value);
  };

  //filter db:
  const filterCreatedHandler = (event) => {
      event.preventDefault();
      dispatch(filterCreated(event.target.value));
      setCurrentPage(1);
      setOrder(event.target.value); 
  };

  //Ordenamientos
  const sortByNameHandler = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrder(event.target.value);
  }

  const sortByAttackHandler = (event) => {
    event.preventDefault();
    dispatch(orderByAttack(event.target.value))
    setCurrentPage(1);
    setOrder(event.target.value);
  }
  const sortHpHandler = (event) => {
    event.preventDefault();
    dispatch(orderByHp(event.target.value));
    setCurrentPage(1);
    setOrder(event.target.value);
  }

  
  return (

    <div className={styles.containerHome}>

<img className={styles.pokemonLogo} src={International_Pokémon_logo} alt="logo" width={"300px"}/> 
    
<SearchBar />
     
      {/* Types */}
      <div className={`${styles.boxType} ${isActive ? styles.show : null}`}>   

       <div>
        
       

   
     <div className={styles.filterContainer}>
       
      
       <select onChange={(e) => filterHandler(e)}>
      <option value="all">All Pokémons Types</option>
      {allTypes.map((type) => {
              return (
                <option value={type.name} key={type.id}>
                  {type.name}
                </option>
              )
            })}  
          </select>

             
          <select onChange={(e) => sortByAttackHandler(e)}>
           <option value="High_attack">Hight Attack</option>
           <option value="Low_attack">Low Attack</option>
         </select>

         
         <select onChange={(e) => filterCreatedHandler(e)}>
           <option value="all">All from API</option>
           <option value="created">Created</option>
           <option value="api">Existing</option>
         </select>


         <select onChange={(e) => sortHpHandler(e)}>
           <option value="high_hp">Long Health Points</option>
           <option value="low_hp">Few Health Points</option>
         </select> 


         <select onChange={(e) => sortByNameHandler(e)}>
           <option value="asc">A-Z</option>
           <option value="desc">Z-A</option>
         </select>


        </div> 

         </div>

        </div>  

    <div className={styles.btn_container}>
      <div>
        <Link to={'/pokemons'}>
          <button className={styles.btn_create}>Create Pokemon</button>
        </Link>
      </div>
      
      <div>
        <button onClick={clickHandler} className={styles.btn_loading}>
          Loading all Pokemons
        </button>
      </div>
      </div>

      


      <div>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={
            allPokemons.length
          } 
          paginado={paginado}
          currentPage={currentPage}
        />

       <div>
         { !currentPokemons.length ?

         <div className={styles.imgLoading}>
         <img src={loadingPokebola} alt="Loading.." width={"120px"} />
         <img src={loadingPokebola} alt="Loading.." width={"120px"} />
         </div>:
         
         currentPokemons.length > 0  &&

           currentPokemons.map((ele) => {
             return (
               <div key={ele.id} className={styles.containerCard} >
                  <Link to={`/pokemons/${ele.id}`} className={styles.linkCards}> 
                  <CardPokemon
                     name={ele.name}
                     types={ele.types}
                     img={ele.img}
                     id={ele.id}
                     key={ele.id}
                   />
                  </Link> 
                    
               
                  
               </div>
             )
           })}
       </div>

      </div>

    </div>
  )
}
export default Home;



      
     