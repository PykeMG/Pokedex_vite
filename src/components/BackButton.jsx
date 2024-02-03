import { useNavigate } from "react-router-dom";
import '../styles/BackButton.scss';

const BackButton = () =>{

    const navigate = useNavigate();

    return(
        <button className="pokeballbutton" onClick={() => navigate(-1)}>
            <div className="backbtn text-white">
                <span className="material-symbols-outlined">
                arrow_back_ios
                </span>
                <span>
                    Back
                </span>
            </div>
        </button>
    );
};

export default BackButton;