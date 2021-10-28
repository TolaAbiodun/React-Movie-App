// Create custom hook to load and set state of movies

import {useState, useEffect} from 'react';

// API
import API from '../API'

// Initialize state object

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useFetchHome = () => {

    // Set states to load movies
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm="") => {
        try {
            setLoading(true);
            setError(false);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

        } catch(error) {
            setError(true);
        }
            setLoading(false);
    };

    // return array of movies
    useEffect(() => {
        fetchMovies(1)
    }, []);

    // return states
    return {state, loading, error};
};