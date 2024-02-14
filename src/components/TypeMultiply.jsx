import PropTypes from 'prop-types';

const TypeMultiply = ({type, multiply}) => {
    return (
        <span className={`flex items-center text-slate-50 rounded-full py-1 pl-3 type-${type}`} >
            <img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`} className='size-5' />
           
            <p className='mx-1 bg-slate-700 rounded-full size-8 flex items-center justify-center'>x{multiply}</p> 
        </span>  
    );
  };

TypeMultiply.propTypes = {
    type: PropTypes.string.isRequired,
    multiply: PropTypes.number.isRequired,
};


export default TypeMultiply;