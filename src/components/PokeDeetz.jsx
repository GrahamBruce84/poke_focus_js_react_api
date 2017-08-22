import React from 'react'

export default class PokeDeetz extends React.Component{
  render(){
    if(!this.props.pokemon){
      return null;
    }

    return(
      <div>
      <h3>{this.props.pokemon.name}</h3>
      <h3>{this.props.pokemon.weight}</h3>
      </div>
      )
  }
}