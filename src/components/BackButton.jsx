import { useNavigate } from "react-router-dom";
//import '../styles/BackButton.scss';

const BackButton = () =>{

    const navigate = useNavigate();

    return(
        <button className="cursor-pointer outline-none flex items-center bg-transparent w-full fixed top-0 left-0 z-20 p-5" onClick={() => navigate(-1)}>
            <div className="text-xl border-zinc-900 border-2 text-zinc-900 bg-slate-50 rounded-full size-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
            </div>
        </button>
    );
};

export default BackButton;