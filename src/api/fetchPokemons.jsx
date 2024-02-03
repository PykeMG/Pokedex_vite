import { formatPokemonName } from "../utils/utils";
export async function fetchPokemons() {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    }
    const results = await response.json();
    
    const evolutionPokemons = results.results.filter((pokemon) => pokemon.evolution === null);

    const pokemons = evolutionPokemons.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        type: pokemon.type[0],
        type2: pokemon.type[1],
        evolution: pokemon.evolution,
        imgSrc: `https://img.pokemondb.net/artwork/${formatPokemonName(pokemon.name.toLowerCase())}.jpg`,
    }));

    const uniquePokemons = pokemons.filter(
        (pokemon, index) =>
        pokemons.findIndex((other) => other.id === pokemon.id) === index
    )
    

    return uniquePokemons;
}


//https://img.pokemondb.net/artwork/${formatPokemonName(pokemon.name.toLowerCase())}.jpg