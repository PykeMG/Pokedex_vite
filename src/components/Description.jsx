import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Skeleton from '../skeletons/Skeleton';

const Description = ({name}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [flavorTextEntries, setFlavorTextEntries] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFlavorTextEntries(data.flavor_text_entries);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, []);
    const filteredEntries = flavorTextEntries.filter(
        entry => entry.language.name === 'en' && entry.version.name === 'omega-ruby'
      );

    return (
        <div className="w-full mb-8">
            {isLoading ? (
                <Skeleton />
            ) : (
                filteredEntries.map((entry, index) => (
                <p className="text-base text-wrap text-left" key={index}>{entry.flavor_text}</p>
                ))
            )}                                    
        </div>
    );
  };
  //className="text-base text-wrap text-left"
  Description.propTypes = {
    name: PropTypes.string.isRequired,
};


export default Description;