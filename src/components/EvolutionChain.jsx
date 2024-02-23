import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SkeletonImage from '../skeletons/SkeletonImage';
import { convertid } from '../utils/utils'
import { Link } from "react-router-dom";

const PokemonEvolutions = ({name, title}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [evolutions, setEvolutions] = useState([]);
    useEffect(() => {
        const fetchEvolutions = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
            const data = await response.json();
            const evolutionChainUrl = data.evolution_chain.url;
            const evolutionChainResponse = await fetch(evolutionChainUrl);
            const evolutiondData = await evolutionChainResponse.json();
            const evolutionChain = evolutiondData.chain;
            const pokemonEvolutions = parseEvolutionChain(evolutionChain);
            setEvolutions(pokemonEvolutions);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchEvolutions();
    }, []);
    const parseEvolutionChain = (chain) => {
        const evolutions = [];
        parseChain(chain, evolutions);
        return evolutions;
      };
    
    const parseChain = (chain, evolutions) => {
        const pokemonName = chain.species.name;
        const pokemonId = getPokemonIdFromUrl(chain.species.url);
        if (pokemonId <= 600) {
          evolutions.push({ id: pokemonId, name: pokemonName });
          }
          if (chain.evolves_to.length > 0) {
            chain.evolves_to.forEach((evolution) => {
              parseChain(evolution, evolutions);
            });
          }
      };

    const getPokemonIdFromUrl = (url) => {
        const parts = url.split('/');
        return parseInt(parts[parts.length - 2]);
      };

    return (
        <div>
          <h2 className='text-zinc-950 pb-1 text-xl font-bold'>{title}</h2>
          {isLoading ? (
                <SkeletonImage />
            ) : (
              <ul className='flex items-center justify-around mt-4'>
                  {evolutions.map((evolution, index) => (
                  <Link key={index} to={`/pokemons/${evolution.name}`}>
                      <img className='size-24' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.id}.svg`} />
                      <p className='text-center text-zinc-950 font-bold capitalize'>{evolution.name}</p>
                      <p className='text-center text-zinc-950 font-bold capitalize'>#{convertid(evolution.id)}</p>
                  </Link>
                  ))}
              </ul>
                )
              }
        </div>
    );
  };

  PokemonEvolutions.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};


export default PokemonEvolutions;