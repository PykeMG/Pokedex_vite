import PropTypes from 'prop-types';

const Stats = ({title, stat, type}) => {
    return (
        <div className="flex items-center mt-2">
            <p className="text-sm font-bold text-zinc-700 w-16">{title}</p>
            <span className="text-sm font-medium text-zinc-950 dark:text-gray-400 w-12 text-center">{stat}</span>
            <div className="w-56 h-2 mx-1 bg-slate-300 rounded">
                <div className={`h-2 rounded bg-slate-400 type-${type}`} style={{
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