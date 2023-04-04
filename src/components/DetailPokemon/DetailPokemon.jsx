import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPokemon,  deletePokemon, cleanDetail, getPokemons } from "../../actions/actions";
import {Link, useHistory, useParams} from "react-router-dom";
import styles from "./DetailPokemon.module.css";
import Loading from "../Loading/Loading";


const DetailPokemon = ()=>{
    

    const dispatch = useDispatch();
    
    const history = useHistory();

    const pokemonDetail = useSelector((state)=>state.detailPokemon );
    const pokemons = useSelector((state)=>state.pokemons)
   
   
    const{id}=useParams();
    

    useEffect(()=>{ 
     dispatch(getDetailPokemon(id))
    },[dispatch, id]);

   
   const deleteHandler=(e)=>{
    console.log("funciona")
    e.preventDefault();
    dispatch(deletePokemon(id))
    history.push("/home") 
    dispatch(getPokemons())   
   }

  useEffect(()=>{
    return(()=>{
      dispatch(cleanDetail())
    })
  },[])
 


  return(
   <div className={styles.container_detail}>
    
   {
     pokemonDetail.name ? 
     <div className={styles.cardDetail}>
     {/* NAME */}
     <div className={styles.headings}>
     <Link to={"/home"} ><i className="material-icons" style={{color:"#a5be00"}}>cancel</i></Link> 
     
     {pokemonDetail.createdInDb ? <i className="material-icons" style={{color: "red"}} onClick={(e)=>deleteHandler(e)}>delete</i> : null}
    
     </div>

     
     {/* IMAGE */}
     <h1 className={styles.header}>{pokemonDetail.name}</h1>
     
      <img src={pokemonDetail.img} alt="Image not found" width="230px" height="200px"/>

      {/* STATS */}
      <div className={styles.stat_group}>

      <div  className={styles.stat}>      
     <label className={styles.stat_bar_label} for="range">Attack:  
  <span className={styles.statNumber}>{pokemonDetail.attack}</span>   
     <input class={styles.stat_bar_fill}  type="range" min="0"
        max='200' disabled name="attack" value={pokemonDetail.attack} />
     </label>
     </div>

    <div className={styles.stat}>
     <label className={styles.stat_bar_label} for="range">Defense:       <span className={styles.statNumber}>{pokemonDetail.defense}</span>
     <input class={styles.stat_bar_fill}  type="range" min='0'
        max='200' disabled value={pokemonDetail.defense}/>
     </label>
     </div>

     <div className={styles.stat}>
     <label className={styles.stat_bar_label} htmlFor="range">Speed: 
     <span className={styles.statNumber}>{pokemonDetail.speed}</span>
     <input class={styles.stat_bar_fill}  type="range" min='0'
        max='200' disabled  value={pokemonDetail.speed}/>
     </label>
     </div>

     <div className={styles.stat}>
     <label className={styles.stat_bar_label} for="range">Weight: 
     <span className={styles.statNumber}>{pokemonDetail.weight}</span>
     <input class={styles.stat_bar_fill}  type="range" min="0"
        max="1050" disabled value={pokemonDetail.weight}/>
     </label>
     </div>
    
    <div className={styles.stat}>
     <label className={styles.stat_bar_label} for="range"> Health Points : <span className={styles.statNumber}>{pokemonDetail.hp}</span>
     <input class={styles.stat_bar_fill} type="range"  min="0"
        max='200' disabled value={pokemonDetail.hp} />
     </label>
     </div>

     </div>

     {/* TYPES */}
     <div className={styles.types} >
     <p >Types: <span className={styles.type}>{!pokemonDetail.createdInDb ? pokemonDetail.types + " " : pokemonDetail.Tipos.map((ele)=> ele.name + " ")} </span></p> 
     </div>

   </div>: 
  
<Loading/>

  }

   </div>
  )
};

export default DetailPokemon;



  

{/* <div className={styles.loading_img}>
         <img src={LoadingDetail} alt="Loading" width={"1200px"} height={"500px"}/></div>  */}