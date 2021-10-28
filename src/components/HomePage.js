import React, {useState, useEffect} from 'react';

// Import Configurations 
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

// Import Components
import HeroImg from './HeroImg';
import Grid from './Grid';
import ThumbImg from './Thumbnails'

// Import Hook
import {useFetchHome} from '../hooks/useFetchHome';


// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const {state, loading, error} = useFetchHome();

    console.log(state.results);

    return (
      // Show popular movies first
      <>
        {state.results[0] ? (
          <HeroImg
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}
        
        {/* display popular movies in grid */}
        <Grid header='Popular Movies'>
          {state.results.map(movie => (
            <ThumbImg
                key={movie.id}
                clickable
                image={
                  movie.poster_path 
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
              />
          ))};

        </Grid>
      </>
    );
};

export default Home;