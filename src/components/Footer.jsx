import { Link } from 'react-router-dom';
import PokemonPic from '../assets/pikachu.png';
import Pokeball from '../assets/pokeball.png';
import Pointer from '../assets/pointer.png';

const Footer = () =>{
    return(
        <footer className="flex justify-around w-full h-20 fixed bottom-0 bg-[#d63a3a]">
            <Link className="flex flex-col items-center text-center text-base text-slate-200 my-2 w-1/3" to="/pokemons">
                <img className="size-8 my-1" src={PokemonPic} alt="pokeball"/>
                Pokemons
            </Link>
            <Link className="flex flex-col items-center text-center text-base text-slate-200 my-2 w-1/3" to="/items">
                <img className="size-8 my-1" src={Pokeball} alt="pokeball"/>
                Items
            </Link>
            <Link className="flex flex-col items-center text-center text-base text-slate-200 my-2 w-1/3" to="/pokemons">
                <img className="size-8 my-1" src={Pointer} alt="pokeball"/>
                Map
            </Link>
        </footer>
    );
};

export default Footer;