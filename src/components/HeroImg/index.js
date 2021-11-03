import React from 'react';
import PropTypes from 'prop-types';

// Import Hero Image styles
import {Wrapper, Content, Text} from './HeroImg.styles';

const HeroImg = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImg.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default HeroImg;