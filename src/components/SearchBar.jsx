import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ value, setValue }) => {
    const changeInputHandler = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="👀 Search for a movie by title or year"
                value={value}
                onChange={(e) => changeInputHandler(e)}
            />
        </div>
    );
};

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired
};

export default SearchBar;

