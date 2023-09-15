import PropTypes from 'prop-types';
import './MovieList.css';
import data from '../film.json';
import Movie from './Movie';


const MovieList = ({ value }) => {
    const filteredMovies = data.filter((movie) => {
        // If the value is empty, return all movies
        if (value === '') {
            return movie;
        }

        const searchInput = value.toLowerCase();

        // Check if the movie title or year includes the search input
        return (
            movie.Title.toLowerCase().includes(searchInput) ||
            movie.Year.toLowerCase().includes(searchInput)
        );
    });

    return (
        <div className="movie-list">
        {/* Iterate over the filtered movies and render a Movie component for each */}
            {filteredMovies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    value: PropTypes.string.isRequired,
};

export default MovieList;
