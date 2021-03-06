import React from 'react';
import PropTypes from 'prop-types';

// Stlyes
import {Wrapper, Image} from './Cast.styles';

const Cast = ({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='cast-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

// Check prop types

Cast.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default Cast;