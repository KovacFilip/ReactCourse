import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';

const FIREBASE_DB_URL =
    'https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/movies.json';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addMovieHandler = async (movie) => {
        const response = await fetch(FIREBASE_DB_URL, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
    };

    const fetchMoviestHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(FIREBASE_DB_URL);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            console.log(response);
            console.log(data);

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    releaseDate: data[key].releaseDate,
                    openingText: data[key].openingText,
                });
            }

            setMovies(loadedMovies);
        } catch (err) {
            setError(err.message);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviestHandler();
    }, [fetchMoviestHandler]);

    let content = <p>Found no movies</p>;

    if (error) {
        content = <p>{error}</p>;
    }

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviestHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
