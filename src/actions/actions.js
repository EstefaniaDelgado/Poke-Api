import axios from "axios";
export const  GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const POST_POKEMON = "POST_POKEMON";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const FILTER_BY_TYPE ="FILTER_BY_TYPE";
export const FILTER_CREATED= "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_HP = "ORDER_BY_HP";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const DELETE_POKEMON="DELETE_POKEMON";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

/* primera action creator que me trae los pokemons de la api del servidor */

export const getPokemons = ()=>{

    return async function(dispatch){
        try {
        const infoApi= await axios.get('http://localhost:3001/pokemons/'); 
        return dispatch({type:GET_POKEMONS, payload:infoApi.data})
            
        } catch (error) {
          console.log(error);  
        }
        
    }
};

export const getTypes =()=>{
    return async function(dispatch){
        try {
            await fetch("http://localhost:3001/types")
            .then(response=> response.json())
            .then(data=>dispatch({type:GET_TYPES, payload:data}))
        } catch (error) {
            console.log(error)
        }
     
    }
 };

 //creo la accion del POST:
export const postPokemons = (payload)=>{
   console.log(payload)
    return async function(dispatch){
        try {
       const info=  await axios.post('http://localhost:3001/pokemons/',payload);
             const results = info.data
             console.log(results)
             alert(results)
           return dispatch({type:POST_POKEMON})
              
        } catch (error) {
            console.log(error);
        }
       
    }
};

// traerme el detalle del pokemon de la ruta de la api del Id:
export const getDetailPokemon = (id)=>{
    return async function(dispatch){
        try {
            const infoApi = await axios.get(`http://localhost:3001/pokemons/${id}`)
            console.log(infoApi)
            return dispatch({type:GET_DETAIL_POKEMON, payload: infoApi.data})  
        } catch (error) {
            console.log(error);
        }
        
    }
}

//ruta del servidor por name para mi barra de busqueda
export const getPokemonByName = (name)=>{

    return async function(dispatch){
    try {
        let infoApi = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
          return  dispatch({type:GET_POKEMON_BY_NAME, payload:infoApi.data})  
        
    } catch (error) {
    alert("Pokemon not found");
    }
   }  
};

//FILTROS:


export const filterPokemonByType = (payload)=>{
     console.log(payload)


     return {
      type:FILTER_BY_TYPE,
      payload,
     }
  };
  
  

  //FILTRO DE LA BASE DE DATOS
  export const filterCreated = (payload)=>{

    if(payload === "created"){

        return async function(dispatch){
            try {
            const infoApi= await axios.get('http://localhost:3001/pokemons/filterDb', payload); 
            console.log(infoApi.data.data)
            return dispatch({type:FILTER_CREATED, payload})
                
            } catch (error) {
              alert(error.response.data.message) 
            }
        }    
    }else{
 return{
        type: FILTER_CREATED,
       payload:console.log(payload) ,
    }
    }
   
    
     
  };
  

//ORDENAMIENTOS

export const orderByName = (payload)=>{
    
    return{
        type: ORDER_BY_NAME,
        payload,
    }
};

export const orderByAttack = (payload)=>{
   
    return{
        type: ORDER_BY_ATTACK,
        payload,
    }
};

export const orderByHp = (payload)=>{
   
    return{
        type: ORDER_BY_HP,
        payload,
    }
};

//eliminar pokemon de la base de datos:
export const deletePokemon = (id)=>{
    return async function(dispatch){
        try {
 const apiServer=  await axios.delete(`http://localhost:3001/pokemons/${id}`)
 console.log(apiServer.data.message)
   alert(apiServer.data.message)
      return dispatch({type:DELETE_POKEMON})
        } catch (error) {
           console.log(error)
        }
   
    }
             
};

export const cleanDetail = ()=>{
    return{
      type:CLEAN_DETAIL,
    }
}





















// export const getPokemons = ()=>{
//     return async function(dispatch){
//          await fetch('http://localhost:3001/pokemons/') /* URL de mi servidor */
//           .then(response=>response.json())
//           .then(data=> dispatch({type:GET_POKEMONS, payload:data}))
          
//     }
// };

