import React from "react";
import '../styles.css';

// Error Handling in case image not found
const imageErrorHandler = (e) => {
    e.target.src = "images/default.jpg";
}

// Dynamic movie ratings 
const getRatingClass = (rating) => {
    if(rating >= 8.0)
        return 'rating-good';
    else if(rating >= 5.0)
        return 'rating-ok';
    else
        return 'rating-bad';
}

export default function MovieCard({movie}){
    return(
        <div key = {movie.id} className='movie-card'>
            <img src={`images/${movie.image}`} alt={movie.title} onError={imageErrorHandler}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>
    )
}