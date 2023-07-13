import axios from 'axios';
import swal from 'sweetalert';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const POST_POKEMON = 'POST_POKEMON';
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const ORDER_BY_HP = 'ORDER_BY_HP';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const DELETE_POKEMON = 'DELETE_POKEMON';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const infoApi = await axios.get('/pokemons');
      return dispatch({ type: GET_POKEMONS, payload: infoApi.data });
    } catch (error) {
      return error;
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      await fetch('https://backend-pokemon-np5d.onrender.com/types')
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_TYPES, payload: data }));
    } catch (error) {
      return error;
    }
  };
};

export const postPokemons = (payload) => {
  return async function (dispatch) {
    try {
      const info = await axios.post('/pokemons', payload);
      const results = info.data;
      //  alert(results)
      swal(results, {
        buttons: false,
        timer: 3000,
      });
      return dispatch({ type: POST_POKEMON });
    } catch (error) {
      return error;
    }
  };
};

export const getDetailPokemon = (id) => {
  return async function (dispatch) {
    try {
      const infoApi = await axios.get(`/pokemons/${id}`);
      return dispatch({ type: GET_DETAIL_POKEMON, payload: infoApi.data });
    } catch (error) {
      return error;
    }
  };
};

export const getPokemonByName = (name) => {
  return async function (dispatch) {
    try {
      let infoApi = await axios.get(`/pokemons/?name=${name}`);
      return dispatch({ type: GET_POKEMON_BY_NAME, payload: infoApi.data });
    } catch (error) {
      alert('Pokemon not found');
    }
  };
};

export const filterPokemonByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
};

export const filterCreated = (payload) => {
  if (payload === 'created') {
    return async function (dispatch) {
      try {
        const infoApi = await axios.get('/pokemons/filterDb', payload);

        return dispatch({ type: FILTER_CREATED, payload });
      } catch (error) {
        alert(error.response.data.message);
      }
    };
  } else {
    return {
      type: FILTER_CREATED,
      payload: payload,
    };
  }
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};

export const orderByHp = (payload) => {
  return {
    type: ORDER_BY_HP,
    payload,
  };
};

export const deletePokemon = (id) => {
  return async function (dispatch) {
    try {
      const apiServer = await axios.delete(`/pokemons/${id}`);
      console.log(apiServer.data.message);
      alert(apiServer.data.message);
      return dispatch({ type: DELETE_POKEMON });
    } catch (error) {
      return error;
    }
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};
