import React, { useState, useEffect } from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        console.log('hello')
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
 
    return (
        <div>
            
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
            
        </div>
    );
}
export default Pokemon;


