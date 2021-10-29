// Create custom hook to load and set state of movies

import {useState, useEffect} from 'react';

// API
import API from '../API'

// Initialize movie state object

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useFetchHome = () => {

    // Set states to load and search movies 
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loadMore, setLoadMore] = useState(false);


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

    // return and search for movies
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (!loadMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setLoadMore(false);
    }, 
    [loadMore, searchTerm, state.page]);

    // return states
    return { state, loading, error, searchTerm, setSearchTerm, setLoadMore};
};