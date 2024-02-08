import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(pokemonname) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(pokemonname)}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    }
    const result = await response.json();

    const speciesUrl = result.species.url;

    const response2 = await fetch(speciesUrl);

    const result2 = await response2.json();
    
    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.other["dream_world"].front_default,
        hp: result.stats[0]?.base_stat,
        attack: result.stats[1]?.base_stat,
        defense: result.stats[2]?.base_stat,
        specialAttack: result.stats[3]?.base_stat,
        specialDefense: result.stats[4]?.base_stat,
        speed: result.stats[5]?.base_stat,
        type: result.types[0]?.type.name,
        type2: result.types[1]?.type.name,
        weight: result.weight,
        height: result.height,
        ability: result.abilities[0]?.ability.name,
        maxstat: 255,
        description: result2.flavor_text_entries[7]?.flavor_text,
      };

      return pokemon;
}