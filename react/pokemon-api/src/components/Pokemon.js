import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
                console.log(response.data);
                setPokemon(response.data.results);})
            .catch((err) => console.log(err));
            
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


