import React from 'react';
import PropTypes from 'prop-types';

// Import styles from

import {Wrapper, Content} from './Grid.styles'

// Grid component
const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

Grid.propTypes = {
    header: PropTypes.string,    
}

export default Grid;