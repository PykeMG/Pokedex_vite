import PropTypes from 'prop-types';

const Type = ({type}) => {
    return (
        <span className={`flex items-center text-slate-50 rounded-xl py-1 px-3 type-${type}`} >
            <img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`} className='size-4' />
            <p className='px-1'>{type}</p> 
        </span>  
    );
  };

Type.propTypes = {
    type: PropTypes.string.isRequired,
};


export default Type;