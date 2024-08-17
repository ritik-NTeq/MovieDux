import React, {useState, useEffect} from 'react';
import '../styles.css'
import MovieCard from './MovieCard';

export default function MoviesGrid(){
    
    const [movies, setMovies] = useState([]); // state variable declaration
    // 'movies' stores the state value and 'setMovies' is the function called whenever movies update.
    // Together they define a state.
    // Initialised with empty array.
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");
    
    // useEffect is used to initialise state (so that it runs once only)
    useEffect(() => {
        // const m = ["a", "b", "c"];
        // setMovies(m);
        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))

        // we r collecting data, then converting it into json, then initialising movies.
    },[]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    const handlRatingChange = (e) => {
        setRating(e.target.value);
    };


    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div>

            <input 
                type='text' 
                className='search-input' 
                placeholder='Search movies ...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {/* Now this component has become controlled component because of state var searchTerm
            We have taken 'value' and 'onChange' attribute of input and bind it to the state 'searchTerm' */}

            <div className='filter-bar'>
                <div className='filter-slot'>
                    <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className='filter-slot' value={rating} onChange={handlRatingChange}>
                    <label>Rating</label>
                    <select className='filter-dropdown'>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            <div className='movies-grid'>
                {
                    filteredMovies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>

        </div>
    );
}