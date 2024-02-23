import PropTypes from 'prop-types';

const Header = ({ query, setQuery, text = "Titulo por default" }) => {
    return (
      <header className="rounded-b-2xl bg-[#F33535] p-8 w-full fixed top-0">
      <h2 className='font-bold text-slate-200 text-3xl mb-4'>Find Your Pokemon</h2>
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input type="search" id="default-search" className="p-4 w-full border-none rounded-2xl outline-none block ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:none" value={query} placeholder={text} onChange={(event) => setQuery(event.target.value)}/>
      </div>
      </header>
    );
  };

  Header.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };


export default Header;