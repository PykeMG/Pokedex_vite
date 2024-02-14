import { useNavigate } from "react-router-dom";
//import '../styles/BackButton.scss';

const BackButton = () =>{

    const navigate = useNavigate();

    return(
        <div className="flex fixed top-2 left-3 z-30 p-2 gap-8 border-zinc-600 border-2 bg-slate-50 rounded-full">
            <button className="cursor-pointer outline-none flex items-center bg-transparent" onClick={() => navigate("/pokemons")}>
                <div className="border-zinc-600 border-2 text-zinc-600 bg-slate-50 rounded-full size-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                </div>
            </button>
            <button className="cursor-pointer outline-none flex items-center bg-transparent" onClick={() => navigate(-1)}>
                <div className="border-zinc-600 border-2 text-zinc-600 bg-slate-50 rounded-full size-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
                </div>
            </button>
        </div>
    );
};

export default BackButton;