import { useNavigate } from "react-router-dom";
//import '../styles/BackButton.scss';

const BackButton = () =>{

    const navigate = useNavigate();

    return(
        <button className="border-none cursor-pointer outline-none flex items-center bg-transparent p-5 h-20 w-full fixed top-0 left-0 z-10" onClick={() => navigate(-1)}>
            <div className="text-xl text-white">
                <span className="material-symbols-outlined size-5">
                arrow_back_ios
                </span>
            </div>
        </button>
    );
};

export default BackButton;