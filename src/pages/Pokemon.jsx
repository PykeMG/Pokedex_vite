import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import background from '../assets/background.png';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import BackButton from '../components/BackButton';
import {fetchPokemon} from '../api/fetchPokemon';
import {convertGramsToKilograms} from '../utils/utils';
import {convertCentimeterstoMeters} from '../utils/utils';
import {convertid} from '../utils/utils';
import {formatDescription} from '../utils/utils';
import '../styles/Pokemon.scss';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemon = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const { name } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            await waitFor(1000);
            const fetchedPokemon = await fetchPokemon(name); 
            setPokemon(fetchedPokemon);
            setIsLoading(false);
        }
        getPokemon();
    }, [name]);

    if (isLoading || !pokemon) {
        return <LoadingScreen />
    }

    return (<>
    <div className="pokemon">
    <BackButton />
        <div>
        <div className="background">
        <img src={background} alt=""  className="image-background" />
        </div>
        <div className={pokemon?.type}>
        <main className="pokemoninfo container">
            <div className="pokemontittle">
                <div>
                    <h2>{pokemon?.name}</h2>
                    <div className="typecapsule">
                            <span className={`type-${pokemon?.type}`} >
                                <img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${pokemon?.type}.svg`} />
                                <p>{pokemon?.type}</p> 
                            </span>     
                        {pokemon?.type2 &&
                                <span className={`type-${pokemon?.type2}`}>
                                    <img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${pokemon?.type2}.svg`} />
                                    <p>{pokemon?.type2}</p> 
                                </span>
                        }
                    </div>
                </div>
                <div>
                    <p className='id'>#{convertid(pokemon?.id)}</p>
                </div>
            </div>
            <div className="contain">
                <img src={pokemon?.imgSrc} alt=""  className="pokemoninfoimg" />
            </div>
            <div className="content">
                <div>                                         
                    <p className="description">{formatDescription(pokemon?.description)}</p>
                </div>
                <div className="column">
                    <div className="row">
                        {convertGramsToKilograms(pokemon?.weight)} kg
                        <span className="text">Weight</span>
                    </div>
                    <div className="row">
                        {convertCentimeterstoMeters(pokemon?.height)} m
                        <span className="text">Height</span>
                    </div>
                </div>
                <div className= "abilitie">
                    <span>Ability</span>
                    <span>{pokemon?.ability}</span>
                </div>
                <div className="flex">
                    <span className="bar"></span>
                    <span>Stats</span>
                    <span className="bar"></span>
                </div>
                <div className="w-full pb-10">
                    <Stats title='HP' stat={pokemon?.hp} type={pokemon?.type}/>
                    <Stats title='STK' stat={pokemon?.attack} type={pokemon?.type}/>
                    <Stats title='DEF' stat={pokemon?.defense} type={pokemon?.type}/>
                    <Stats title='SPD' stat={pokemon?.speed} type={pokemon?.type}/>
                    <Stats title='SATK' stat={pokemon?.specialAttack} type={pokemon?.type}/>
                    <Stats title='SDEF' stat={pokemon?.specialDefense} type={pokemon?.type}/>
                </div>       
            </div>
        </main>
        </div>
        </div>
    </div>
    <Footer />
    </>
    );
};


export default Pokemon;