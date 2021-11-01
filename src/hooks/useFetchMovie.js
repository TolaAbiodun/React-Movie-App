import {useState, useEffect} from 'react';
// API
import API from '../API';

export const useFetchMovie = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true); 
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                // Get movie directors
                const directors = credits.crew.filter(
                    crewMember => crewMember.job === 'Director'
                );

                // pass movie directors, actors into empty state object
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        // Fecth movie 
        fetchMovieData();
    }, [movieId]);

    // return states
    return {state, loading, error}
};