// Create custom hook to load and set state of movies on the homepage

import {useState, useEffect} from 'react';
import {isPersistentState} from '../helpers';

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
        // Fetch moveie from session storage if not in searchTerm
        if(!searchTerm) {
            const homeSession = isPersistentState('Home');


            if (homeSession) {
                setState(homeSession);
                return;
            }
        }

        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);


    useEffect(() => {
        if (!loadMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setLoadMore(false);
    }, 
    [loadMore, searchTerm, state.page]);

    // Push files to session storage
    useEffect(() => {
        if(!searchTerm) {
            sessionStorage.setItem('Home', JSON.stringify(state))
        }
    },[searchTerm, state])


    // return states
    return { state, loading, error, searchTerm, setSearchTerm, setLoadMore};
};