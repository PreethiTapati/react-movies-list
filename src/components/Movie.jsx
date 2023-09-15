import  { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ movie }) => {
    const [liked, setLiked] = useState(false);

    // Define a function called 'toggleLike' that toggles the value of 'liked'
    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return (
        <div className={`movie-container ${liked ? 'yes' : 'no'}`}>
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <p className="movie-year">
                    <BiCalendar /> {movie.Year}
                </p>
                <div className="like-button">
                    {/* Display a button that toggles the 'liked' state when clicked */}
                    <button onClick={toggleLike}>
                        <AiFillHeart
                            color={liked ? 'red' : 'white'}
                            size={19}
                        />
                    </button>
                </div>
            </div>
            <div className="movie-details">
                <h2>{movie.Title}</h2>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object.isRequired
};

export default Movie;
