import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// Import styles
import { ThumbNails } from './Thumbnails.styles';

const ThumbImg = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <ThumbNails src={image} alt="movie-thumb-image" />
      </Link>
    ) : (
      <ThumbNails src={image} alt="movie-thumb-image" />
    )}
  </div>
); 

ThumbImg.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default ThumbImg;