import {  DELETE_POKEMON, FILTER_BY_TYPE, FILTER_CREATED,  GET_DETAIL_POKEMON,  GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, ORDER_BY_ATTACK, ORDER_BY_HP, ORDER_BY_NAME, POST_POKEMON, CLEAN_DETAIL } from "../actions/actions";

const initialState={
    pokemons:[],
    types:[],
    allPokemons:[], 
    detailPokemon:{},
};


const rootReducer = (state=initialState,action)=>{

     switch(action.type) {

        case GET_POKEMONS:
            return{
                ...state,
                pokemons:action.payload,
                allPokemons: action.payload,
            };

        case GET_TYPES:
            return{
            ...state,
            types: action.payload,
            };   
            
            case GET_POKEMON_BY_NAME:
                return{
                    ...state,
                    pokemons: action.payload,
                };   
            
        
        case POST_POKEMON:
                return{
                    ...state
                };

        case GET_DETAIL_POKEMON:
            return{
              ...state,
              detailPokemon:action.payload,
            };   

            case FILTER_BY_TYPE:

                const allPokemons = state.allPokemons; 
                const typeFilter = action.payload === "all" ? allPokemons : allPokemons.filter((ele)=> ele.types.includes(action.payload));
                console.log(typeFilter)
                if(!typeFilter.length) alert("There is no Pokemon with that type")
                else{
                    return{
                        ...state,
                        pokemons: typeFilter,
                        }
                }
                

            case FILTER_CREATED:

                const pokemonsAll = state.allPokemons;
                console.log(pokemonsAll)
                const createdFilter = action.payload ==="created" ? pokemonsAll.filter((ele)=> ele.createdInDb) :  pokemonsAll.filter((ele)=> !ele.createdInDb) ;
                console.log(createdFilter)
              
                return{
                  ...state,
                  pokemons: action.payload === "all" ? pokemonsAll : createdFilter,
                }
            

                case ORDER_BY_NAME:
                  
                let sortedName; 
                //ordena de manera ascendente
                    if(action.payload === "asc"){
          sortedName =  state.pokemons.sort(function(a,b){
                            if(a.name > b.name) return 1;
                            if(b.name > a.name) return -1;
                            return 0;
                        });
                     } //sino ordena de manera descendente
                       if(action.payload === "desc"){
              sortedName = state.pokemons.sort(function(a,b){
                                if(a.name > b.name)return -1;
                                 if(b.name > a.name) return 1;
                                return 0;
                            });
                        };
                       

                    return{
                    ...state,
                    pokemons: sortedName,
                    
                    };
                    case ORDER_BY_ATTACK:
                     
                    let sortedAttack;

                        if(action.payload === "High_attack"){
                        sortedAttack = state.pokemons.sort(function(a,b){
                                   if(a.attack < b.attack) return 1;
                                   if(a.attack > b.attack) return -1;
                                   return 0;
                            });
                        } 
                        if(action.payload === "Low_attack"){
                            sortedAttack = state.pokemons.sort(function(a,b){
                                if(a.attack > b.attack)return 1;
                                 if(b.attack > a.attack) return -1;
                                return 0;
                            });
                        };
                        return{
                            ...state,
                            pokemons : sortedAttack,
                        };
                        case ORDER_BY_HP:
                        let sortedHp;

                        if(action.payload === "high_hp"){
                            sortedHp = state.pokemons.sort(function(a,b){
                                       if(a.hp < b.hp) return 1;
                                       if(a.hp > b.hp) return -1;
                                       return 0;
                                });
                            } 
                            if(action.payload === "low_hp"){
                                sortedHp = state.pokemons.sort(function(a,b){
                                    if(a.hp > b.hp)return 1;
                                     if(b.hp > a.hp) return -1;
                                    return 0;
                                });
                            };
                            return{
                                ...state,
                                pokemons: sortedHp,
                            };

                
                        case DELETE_POKEMON:
                            console.log(state.pokemons)
                               return{
                                ...state,
                                pokemons:state.pokemons
                                                                
                               };
                        
                               case CLEAN_DETAIL:
                                return{
                                    ...state,
                                    detailPokemon:{}
                                }
                       
        default:
            return {...state}
     }
};

export default rootReducer;