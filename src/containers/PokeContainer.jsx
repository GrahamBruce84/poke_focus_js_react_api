import React from 'react';
import PokeSelector from '../components/PokeSelector.jsx'
import PokeDeetz from '../components/PokeDeetz.jsx'
import Header from '../components/Header.jsx'
import _ from 'lodash'

export default class PokeContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      focusPoke: null
    };
  }

  componentDidMount(){
    const url = "http://pokeapi.co/api/v2/pokemon/?limit=811"; 
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', ()=>{
      if(request.status ===200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        const dataSorted = _.sortBy(data.results, ['name']);
        // debugger;
        this.setState({
          pokemons: dataSorted,
          focusPoke: data.results[0]
        });
      }
    });
    request.send();
  }

  setFocusPoke(pokemon) {
    
    const url = pokemon.url; 
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', ()=>{
      if(request.status ===200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        // debugger;
        this.setState({
          focusPoke: data
        });
      }
    });
    request.send();
  }

  render(){
    return (
      <div className="poke-ball">
      <Header />
      <PokeSelector
      pokemons={this.state.pokemons}
      selectPokemon={this.setFocusPoke.bind(this)}
      />
      <PokeDeetz 
      pokemon={this.state.focusPoke}
      />
      </div>
      )
  }


}