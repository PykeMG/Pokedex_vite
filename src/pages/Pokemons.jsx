import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import {typeslower} from '../utils/utils';
import TypeCapsule from '../components/TypeCapsule';
import {deleteId} from '../utils/utils'

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [query, setQuery] = useState("");

useEffect(() => {
    const getPokemons = async () => {
        setIsLoading(true);
        await waitFor(1000);
        const data = await fetchPokemons();
        setPokemons(data);
        setIsLoading(false);
    };
    getPokemons();
}, [])
if (isLoading || !pokemons) {
    return <LoadingScreen />
}
const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
})
    return (     
        <>
        <Header query={query} setQuery={setQuery} text='Search pokemon name' /> 
        <section>
        <nav className="bg-white pt-48 pb-2 px-8">
                {filteredPokemons?.slice(0, 151).map((pokemon) => (
                <Link key={pokemon.id} className="bg-zinc-100 py-2 px-5 rounded-xl flex w-full gap-4 mb-4 items-center" to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                    <img src={pokemon.imgSrc} alt={pokemon.name} className="size-20 w-1/3" />
                    <div className="flex flex-col w-2/3 gap-y-1.5">
                        <div className="flex">
                        <span className="font-bold">{pokemon.name}</span>
                        <span className="ml-4">#{pokemon.id}</span>
                        </div>
                        <div className="flex w-full gap-1.5">
                            <TypeCapsule type={pokemon?.type.toLowerCase()}/> 
                        {pokemon?.type2 &&
                            <TypeCapsule type={pokemon?.type2.toLowerCase()}/>
                        }
                        </div>
                    </div>
                </Link>
                ))}
        </nav>
        </section>
        </>
    );
};

export default Pokemons;