import PropTypes from 'prop-types';

const Stats = ({title, stat, type}) => {
    return (
        <div className="flex items-center mt-4">
            <p className="text-sm font-bold text-gray-100 w-10">{title}</p>
            <span className="text-sm font-medium text-gray-300 dark:text-gray-400 w-10 text-center">{stat}</span>
            <div className="w-[250px] h-2 mx-1 bg-zinc-950 rounded">
                <div className={`h-2 rounded bg-slate-500 type-${type}`} style={{
                    width: `${(stat/255)*100}%`,
                }}></div>
            </div>
        </div>   
    );
  };

Stats.propTypes = {
    title: PropTypes.string.isRequired,
    stat: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};


export default Stats;