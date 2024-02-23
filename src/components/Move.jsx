import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Move = ({moves}) => {
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    useEffect(() => {
        const fetchMoveDescription = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/move/${moves}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch move description");
                }
                const data = await response.json();
                const flavorText = data.flavor_text_entries.find(entry => entry.language.name === 'en');
                setDescription(flavorText ? flavorText.flavor_text : 'Description not available');
                const MoveType = data.type.name;
                setType(MoveType);
            } catch (error) {
                console.error('Error fetching move description:', error);
            }
        };

        fetchMoveDescription();
    }, [moves]);

    const buildDescription = (text, maxlength) => {
        if (text.length > maxlength) {
            return text.slice(0, maxlength) + '...'
        }
        return text;
    }

    return (
        <Link className='w-full' to={`/moves/${moves}`}>
            <div className='bg-gray-200 my-2 py-2 px-5 rounded-lg flex items-center justify-between'>
                <div>
                    <p className='font-bold capitalize text-lg m-0 p-0'>{moves}</p>
                    <p>{buildDescription(description, 20)}</p>
                </div>
                <div>
                    <span className={`flex items-center text-slate-50 rounded-xl p-2 type-${type}`} >
                    <img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`} className='size-5' />
                    </span>  
                </div>
            </div>
        </Link>
    );
  };

Move.propTypes = {
    moves: PropTypes.string.isRequired,
};


export default Move;