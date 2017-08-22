import React from 'react';

export default class PokeSelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    let newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });
    const selectedPokemon = this.props.pokemons[newIndex];
    this.props.selectPokemon(selectedPokemon); 
  }

  render(){
    const options = this.props.pokemons.map( (pokemon, index)=>{
      return <option 
      value={index} 
      key={index}
      >
      {pokemon.name}
      </option>
    })

    return(
        <select 
        id="pokemons"
        value={this.state.selectedIndex}
        onChange={this.handleChange.bind(this)}
        >
        {options}
        </select>
      );
  }
}
