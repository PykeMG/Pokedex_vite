import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Index.scss';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

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
        <Header query={query} setQuery={setQuery} text='Search a Pokemon' /> 
        <section>
        <nav>
                {filteredPokemons?.slice(0, 151).map((pokemon) => (
                <Link key={pokemon.id} className="listItem" to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                    <img src={pokemon.imgSrc} alt={pokemon.name} className="listItemIcon" />
                    <div className="listItemText">
                        <div className="flex">
                        <span>{pokemon.name}</span>
                        <span>{pokemon.id}</span>
                        </div>
                        {<div className="types">
                            <span className={pokemon.type}>{pokemon.type}</span>
                            <span className={pokemon.type2}>{pokemon.type2}</span>
                        </div> }
                    </div>
                </Link>
                ))}
        </nav>
        </section>
        <Footer />
        </>
    );
};

export default Pokemons;