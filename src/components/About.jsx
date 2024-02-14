import PropTypes from 'prop-types';

const About = ({title,description,measure}) => {
    return (
        <div className='flex items-center py-1 justify-start w-full'>
            <h3 className='text-zinc-500 font-bold w-20'>{title}:</h3>
            <p className='text-zinc-950 ml-1 font-bold'>{description} {measure}</p>
        </div>
    );
  };

About.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
};


export default About;