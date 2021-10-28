import React from 'react';

// Import styles
import { ThumbNails } from './Thumbnails.styles';

const ThumbImg = ({image, movieId, clickable}) => (
    <div>
        <ThumbNails src={image} alt='movie-thumb-image'/>
    </div>
);

export default ThumbImg;