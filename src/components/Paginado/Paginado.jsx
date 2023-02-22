import React from "react";
import arrow_next from "../image/Imagen2.png"
import arrow_previous from "../image/Imagen3.png"
import styles from "./Paginado.module.css"

const Paginado = ({pokemonsPerPage, allPokemons, paginado,currentPage})=>{

   const pageNumbers = [];

   for(let i = 1; i <=Math.ceil(allPokemons/pokemonsPerPage);i++){
    pageNumbers.push(i);
   }

   return(
    <div className={styles.paginado}>
           <ul >
          <li className={styles.buttons}  style={currentPage<=1? {display:"none"} :{}} onClick={()=>paginado(currentPage-1)}>
           <img className={styles.iconArrows} src={arrow_previous} alt="Icon arrow" height={"25px"} /> </li>    
           {
           pageNumbers.length > 0 && pageNumbers.map(number=>{
              return ( 
           <li  className={"number"} key={number} >
             <a onClick={()=>paginado(number)}>{number}</a>      
           </li>
              )
           })}
           <li className={styles.buttons} style={currentPage >= pageNumbers.length? {display:"none"} :{}} onClick={()=>paginado(currentPage+1)}> <img className={styles.iconArrows} src={arrow_next} alt="Icon arrow"  height={"25px"}/>   </li>
        </ul>
    </div>
   )
};

export default Paginado;