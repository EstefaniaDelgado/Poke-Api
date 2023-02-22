import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPokemon from './components/DetailPokemon/DetailPokemon';
import ComponenteError from './components/CompError/CompError';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import PokemonCreated from './components/PokemonCreated/PokemonCreated';

function App() {
  return (
    <div className="App">
      {/*  <h1>Henry Pokemon</h1>  */}
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/pokemons'} component={PokemonCreated} />
        <Route exact path={'/pokemons/:id'} component={DetailPokemon} />
        <Route path="*" component={ComponenteError} />
      </Switch>
      
    </div>
  );
}

export default App;
