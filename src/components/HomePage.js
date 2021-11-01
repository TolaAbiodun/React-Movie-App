import React from 'react';

// Import Configurations 
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

// Import Components
import HeroImg from './HeroImg';
import Grid from './Grid';
import ThumbImg from './Thumbnails'
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';


// Import Hook
import {useFetchHome} from '../hooks/useFetchHome';


// Image
import NoImage from '../images/no-img.png';

const Home = () => {

    const {state, loading, error, searchTerm, setSearchTerm, setLoadMore} = useFetchHome();

    console.log(state.results);

    if (error) <div>Oops!, Something went wrong....</div>;

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
        {/* Place serachbar */}
        <SearchBar setSearchTerm={setSearchTerm} />
        {/* display popular movies in grid */}
        <Grid header={searchTerm ? "Results" : "Popular Movies"}>
          {state.results.map((movie) => (
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
          ))}
        </Grid>
        {loading && <Spinner />}
        {/* Show load movie button */}
        {state.page < state.total_pages && !loading && (
          <Button text="More" callback={() => setLoadMore(true)} />)}
      </>
    );
};

export default Home;