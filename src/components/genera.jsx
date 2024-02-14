import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SkeletonOne from '../skeletons/SkeletonOne';

const Genera = ({name}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [getGenera, setGenera] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGenera(data.genera);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, []);
    const filteredGenera = getGenera.filter(
        entry => entry.language.name === 'en');

    return (
        <div className='w-full'>
            {isLoading ? (
                <SkeletonOne />
            ) : (
                filteredGenera.map((entry, index) => (
                <div key={index} className='flex items-center py-1 justify-start w-full'>
                    <h3 className='text-zinc-500 font-bold w-20'>Gender:</h3>
                    <p className='text-zinc-950 ml-1 font-bold'>{entry.genus}</p>
                </div>
                ))
            )}                                    
        </div>
    );
  };
  //className="text-base text-wrap text-left"
  Genera.propTypes = {
    name: PropTypes.string.isRequired,
};


export default Genera;