import Pokedex from "../assets/pokedex.png";

const LoadingScreen = () => {
    return  <div className="bg-zinc-100 h-screen flex flex-col justify-center place-items-center relative">
                <img className="size-[250px] object-contain" src={Pokedex} alt="" />
                <div className="text-center py-8">
                    <div className="loading loading-dots loading-lg"></div>
                    <h2 className="text-[#2B2B2B] text-base uppercase py-5">Finding Pokemon ...</h2>
                </div>
            </div>
};

export default LoadingScreen;