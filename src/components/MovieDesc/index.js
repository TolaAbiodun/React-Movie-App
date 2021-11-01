import React from 'react';

// import component
import ThumbImg from '../Thumbnails';
import {calcTime} from '../../helpers';


// import config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';

// Import images
import NoImage from '../../images/no_image.jpg';

import { Wrapper, Content, Text } from "./MovieDesc.styles";


// Create Movie Description component
 const MovieDescription = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <ThumbImg
                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`: NoImage}
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Category</h3>
                <p>{movie.overview}</p>

                <div className="rating-dir">
                    <div>
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>

                    {/* Return more than one director if any exits */}
                    <div className="dir">
                        <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                    <div className="run-time">
                        <h3>Running Time</h3>
                        <p>{calcTime(movie.runtime)}</p>
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
 );

 export default MovieDescription;