import Pokedex from "../assets/pokedex.png";
import '../styles/LoadingScreen.scss';

const LoadingScreen = () => {
    return <div className="loadingScreen">
        <img className="loadingScreenIcon" src={Pokedex} alt="" />
        <div className="contentLoading">
            <div className="loading"></div>
            <h2>Finding Pokemon ...</h2>
        </div>
        </div>
};

export default LoadingScreen;