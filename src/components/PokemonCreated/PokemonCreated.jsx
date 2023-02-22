import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, getTypes, postPokemons } from '../../actions/actions.js'
import { Link, useHistory } from 'react-router-dom'
import validate from './FunctionValidate.js'
import styles from './PokemonCreated.module.css'

const PokemonCreated = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  //global states
  const types = useSelector((state) => state.types)
  console.log(types)
  const allPokemons = useSelector((state) =>
    state.pokemons.map((ele) => ele.name),
  )
  console.log(allPokemons)

  //local states of errors
  const [error, setError] = useState({})

  const [disable, setDisabled] = useState(false)

  const [input, setInput] = useState({
    name: '',
    img: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  })

  useEffect(() => {
    dispatch(getTypes())
    dispatch(getPokemons())
  }, [dispatch])

  useEffect(() => {
    const pokemons = allPokemons.includes(input.name)
      ? setDisabled(true) 
      : setDisabled(false)
  }, [input.name])

  //handler para los inputs excepto el de tipo checkbox
  const changeHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
        
      }),
    )
    console.log(error)
  }

  //funcion handler para el input de tipo checkbox
  const checkHandler = (event) => {
    const { value } = event.target;
    if (event.target.checked) {
      setInput({
        ...input,
        types: [...input.types, value],
      })
    }
    if (!event.target.checked) {
      setInput({
        ...input,
        types: input.types.filter((ele) => ele !== value),
      })
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    !input.img
      ? setInput(
          (input.img =
            'https://scarletviolet.pokemon.com/_images/pokemon/pawmi/pokemon-pawmi.png'),
        )
      : setInput(input);
    dispatch(postPokemons(input));
    history.push('/home'); 
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
       <div className={styles.containerTypes}>
        
       <div className={styles.header}>
        <h1>Create your Pokemon</h1>
      </div>
         <div className={styles.inputs}>
           {/* input para el name */}
          <div className={styles.inputName}>
             <label htmlFor="name">Pokemon Name: </label>
             <input
              className={styles.name} 
               type="text"
               value={input.name}
               name="name"
               id="name"
               onChange={(e) => changeHandler(e)}
              
             />
             {allPokemons.includes(input.name) ? <p style={{color:'blue'}}>This name already exist</p> : null }
              {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
            
          </div>
         
        <br />
         <div>
           {/* input para la imagen */}
           <label htmlFor="Image" styles={{ height: '50px' }}>
             Image:
           </label>
           <input
             alt="Image not found"
             type="text"
             value={input.img}
             name="img"
             onChange={(e) => changeHandler(e)}
             placeholder={' paste url image...'}
             className={styles.image}
             
           />
           {!input.img ? <p style={{color:"blue"}}>{error.image}</p> : error.img && <p style={{ color: "red" }}>{error.img}</p> }
        {/*  {error.img && <p style={{ color: 'blue' }}>{error.img}</p>}  */}
         </div>
         </div>
    <br />
         {/* input para las estadisticas */}
        <div className={styles.points}>
           <label> Health Points {input.hp}</label>
           <input
             type="range"
             value={input.hp}
             name="hp"
             min={'1'}
             max={'140'}
             onChange={(e) => changeHandler(e)}
             className={styles.statsInputs}
           />
           
           <label>Attack {input.attack}</label>
           <input
             type="range"
             value={input.attack}
             min={'1'}
             max={'150'}
             name="attack"
             onChange={(e) => changeHandler(e)}
             className={styles.statsInputs}
           />
           
           <label>Defense {input.defense}</label>
           <input
             type="range"
             value={input.defense}
             min={'1'}
             max={'150'}
             name="defense"
             onChange={(e) => changeHandler(e)}
             className={styles.statsInputs}
           />
           
           <label>Speed {input.speed}</label>
           <input
             type="range"
             value={input.speed}
             min={'1'}
             max={'100'}
             name="speed"
             onChange={(e) => changeHandler(e)}
           />
           
           <label>Height {input.height}</label>
           <input
             type="range"
             value={input.height}
             min={'1'}
             max={'80'}
             name="height"
             onChange={(e) => changeHandler(e)}
             className={styles.statsInputs}
           />
           
           <label>Weight {input.weight}</label>
           <input
             type="range"
             value={input.weight}
             min={'1'}
             max={'1000'}
             name="weight"
             onChange={(e) => changeHandler(e)}
             className={styles.statsInputs}
           />

           <br />

            {/* input para los types */}
         <div className={styles.filter_by_type}>
          {types.map((type) => {
            return (
              <div className={styles.group_type} key={type.id}>
                <label>{type.name}</label>
                <div  >
                <input
                  className={styles[type]}
                  type="checkbox"
                  name={type.name}
                  value={type.name}
                  onChange={(e) => checkHandler(e)}
                /> 
                </div>
              </div>
            )
          })}
           {error.types && <p className={styles.error_types}>{error.types}</p> } 

              
        </div> 
          </div>
          <button  className={styles.btn_create}
          type="submit"
          disabled={
            !input.name ||
            !input.hp ||
            !input.attack ||
            !input.defense ||
            !input.speed ||
            !input.height ||
            !input.weight ||
            !input.types.length ||
            input.types.length > 2 ||
            error.name ||
            error.img ||
            disable
          }
        >
          Create a Pokemon
        </button>
        
        </div>

        

      </form>
      
      <br />

      <Link to={'/home'}>
        <button className={styles.btn_back}>Back to Homepage</button>
      </Link>

      
    </div>
  )
}

export default PokemonCreated












// if (input.name.match("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")) {
//   setError([])
//   //console.log("nombre valido")
// } else {
//   setError( 'Cannot type special simbols')
//   //console.log("Cannot type special simbols")
// }
// console.log(input.img)
