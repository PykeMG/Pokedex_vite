import React, { useState, useEffect } from 'react';

const TypeFilter = ({ selectedType, handleTypeSelection }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch Types");
                }
                const data = await response.json();
                const typesData = data.results.map((type) => type.name);
                setTypes(typesData);              
            } catch (error) {
                console.error('Error fetching Types', error);
            }
        };
        fetchTypes();
    }, []);

    const filteredTypes = types.filter(type => type !== "unknown" && type !== "shadow");


    return (
        <div className='flex w-full gap-2 overflow-x-scroll whitespace-nowrap flex-nowrap text-zinc-100'>
            <button 
                onClick={() => handleTypeSelection("")} 
                className={`bg-blue-800 text-white rounded-xl px-4 py-1`}>
                     <p>All</p>
                </button>
            {filteredTypes.map((type) => (
                <button
                key={type} 
                onClick={() => handleTypeSelection(type)} 
                className={`${selectedType === type && `${type} text-white`} ${type} rounded-xl px-4 py-1`}>
                    <p>{type}</p>
                </button>
            ))}
        </div>
    );
  };

export default TypeFilter;