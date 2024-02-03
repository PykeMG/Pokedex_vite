import PropTypes from 'prop-types';
import '../styles/Header.scss';

const Header = ({ query, setQuery, text = "Titulo por default" }) => {
    return (
      <header className="header">
        <input
          className="input"
          placeholder={text}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </header>
    );
  };

  Header.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };


export default Header;