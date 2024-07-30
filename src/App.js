import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
// 9701bf54

const API_URL = 'http://www.omdbapi.com?apikey=9701bf54';

const movie1 =
{
    "Title": "Thor",
    "Year": "2011",
    "imdbID": "tt0800369",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState( [] );

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect( () => {
        searchMovies('thor')
    }, []);

    return (
        <div className="app">
            <h1>MetFlix</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={ () => {}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={ () => {}}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map( (movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }


        </div>
    )
}

export default App;