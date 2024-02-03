import { Link } from 'react-router-dom';
import PokemonPic from '../assets/pikachu.png';
import Pokeball from '../assets/pokeball.png';
import Pointer from '../assets/pointer.png';
import '../styles/Footer.scss';

const Footer = () =>{
    return(
        <footer className="footer">
            <Link className="footerLink" to="/pokemons">
                <img className="footerIcon" src={PokemonPic} alt="pokeball"/>
                Pokemons
            </Link>
            <Link className="footerLink" to="/items">
                <img className="footerIcon" src={Pokeball} alt="pokeball"/>
                Items
            </Link>
            <Link className="footerLink" to="/pokemons">
                <img className="footerIcon" src={Pointer} alt="pokeball"/>
                Map
            </Link>
        </footer>
    );
};

export default Footer;