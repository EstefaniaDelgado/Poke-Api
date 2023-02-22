import React from "react";
import styles from "./CardPokemon.module.css"


const CardPokemon = ({name,img,types})=>{


    return(
        
        <div className={styles.cardPokemon}>
                        
            <img src={img} alt="Image not found"  height="150px" />
            
            <div className={styles.card_info}>

                <h5>{name}</h5>

                <div className={styles.typescontainer}>
                  {types.map((type) => {
                    return (
                      <p
                        className={styles[type]}
                        key={type}
                      >
                        {type}
                      </p>
                    );
                  })}
                </div>
                
            </div>


        </div>
    )
}

export default CardPokemon;








//     class CardPokemon extends React.Component{
//     constructor(props){
//         console.log(props)
//         super(props);  
//     }
//     render(){
//         return(
//             <div className={styles.cardPokemon}>
//                  <div className={styles.card_img}>
//                      <img src={this.props.img} alt="Pokemon not found" height="150px" />
//                 </div>
//                <div className={styles.card_info}>
//                  <span className={styles.pokemon_id}> N° {this.props.id}</span>
//                  <h5>{this.props.name}</h5>
//                 <div className={styles.card_types}>
//                    {/* <span key={this.props.types.name} className={styles[this.types]}>Types: {this.props.types}</span>  */}
//                    {
//                     this.props.types.split(" ").map(type=>{
//                         return(
//                             <div>
//                                 <p>{type}</p>
//                             </div>
//                         )
//                     })

//                     })
//                    }
                   
//                 </div>
//                </div>
               
//             </div>
//         )
//     }  
// };


 
 