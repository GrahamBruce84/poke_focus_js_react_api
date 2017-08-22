import React from 'react'
import _ from 'lodash'


export default class PokeDeetz extends React.Component{
  

  render(){
    if(!this.props.pokemon){
      return null;
    }


    const abilities = this.props.pokemon.abilities.map((object, index)=>{
      return <li value={object.ability.name} key={index}>{object.ability.name}</li>
    })
    // debugger;

    return(
      <div>
      <h3>{this.props.pokemon.name}</h3>
      <h3>Weight: {this.props.pokemon.weight/10} kg</h3>
      <h3>Abilities: </h3>
      <ul> 
      {abilities}
      </ul>
      <img src={this.props.pokemon.sprites.front_shiny} alt={this.props.pokemon.name}/>
      </div>
      )
  }
}