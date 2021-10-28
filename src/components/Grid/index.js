import React from 'react';

// Import styles from

import {Wrapper, Content} from './Grid.styles'

// Grid component
const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;