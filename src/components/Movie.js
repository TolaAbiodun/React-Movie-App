import React from "react";
import { useParams } from "react-router-dom";

// Import configuration
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';

// Import Hook
import { useFetchMovie } from "../hooks/useFetchMovie";

// import Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieDescription from "./MovieDesc";
import Cast from './Cast';

// Images
import NoImage from "../images/no-img.png";



const Movie = () => {
    // Grab Movie Id's from URL
    const { movieId } = useParams();

    // Destructure and rename fetch movie properties
    const { state: movie, loading, error } = useFetchMovie(movieId);
    
    if (loading) return <Spinner />;
    if (error) return <div>Oops! Something went wrong...</div>;
    console.log(movie);

    return(
        <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieDescription movie={movie} />
        <Grid header="Cast">
            {movie.actors.map(actor => (
                <Cast 
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={
                        actor.profile_path 
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                    }
                 />
            ))}
        </Grid>
        </>
    )
}

export default Movie;