import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import background from '../assets/background.png';
import Stats from '../components/Stats';
import TypeCapsule from '../components/TypeCapsule';
import About from '../components/About';
import BackButton from '../components/BackButton';
import {fetchPokemon} from '../api/fetchPokemon';
import {convertGramsToKilograms} from '../utils/utils';
import {convertCentimeterstoMeters} from '../utils/utils';
import {convertid} from '../utils/utils';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import Description from '../components/Description';
import Genera from '../components/genera';
import EvolutionChain from '../components/EvolutionChain';
import Weakness from '../components/Weakness';

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
    <div className="relative overflow-x-hidden overflow-y-auto h-screen w-full">
    <BackButton />
        <div className="absolute top-28 h-96 w-full opacity-30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball size-96 text-zinc-100" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /></svg>
        </div>
        <div className={`${pokemon?.type} h-full`} >
        <main className="flex flex-col items-center h-full pt-20 max-w-[500px] my-0 relative w-full p-0 m-auto justify-between">
            <div className="flex justify-between w-full py-4 px-6 items-center text-zinc-100">
                <div className="min-w-[180px]">
                    <h2 className="block font-bold tracking-wide text-4xl pb-1 capitalize">{pokemon?.name}</h2>
                    <div className="flex w-full gap-2">
                            <TypeCapsule type={pokemon?.type}/> 
                        {pokemon?.type2 &&
                            <TypeCapsule type={pokemon?.type2}/>
                        }
                    </div>
                </div>
                <div>
                    <p className="text-3xl">#{convertid(pokemon?.id)}</p>
                </div>
            </div>
            <div className="size-52 flex">
                <img src={pokemon?.imgSrc} alt=""  className="w-full z-20 object-contain" />
            </div>
            <div className="w-full flex flex-col items-center py-0 px-8 mx-auto bg-slate-50 text-zinc-900 pt-14 rounded-t-3xl mt-[-40px]">
                <Description name={pokemon?.name}/>
                <About title='Height' description={convertCentimeterstoMeters(pokemon?.height)} measure='m'/>
                <About title='Weight' description={convertGramsToKilograms(pokemon?.weight)} measure='kg'/>       
                <Genera name={pokemon.name}/>    
                <div className="w-full py-10">
                    <Stats title='HP' stat={pokemon?.hp} type={pokemon?.type}/>
                    <Stats title='STK' stat={pokemon?.attack} type={pokemon?.type}/>
                    <Stats title='DEF' stat={pokemon?.defense} type={pokemon?.type}/>
                    <Stats title='SPD' stat={pokemon?.speed} type={pokemon?.type}/>
                    <Stats title='SATK' stat={pokemon?.specialAttack} type={pokemon?.type}/>
                    <Stats title='SDEF' stat={pokemon?.specialDefense} type={pokemon?.type}/>
                </div>    
                <div className='w-full pb-8'>
                    <EvolutionChain title="Evolutions" name={pokemon.name}/>
                </div>  
                <div className='w-full pb-8'>
                    <Weakness title="Weak to" name={pokemon.name}/>
                </div> 
            </div>
        </main>
        </div>
        </div>

    </>
    );
};


export default Pokemon;