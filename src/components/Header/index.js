import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../images/logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';


const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={Logo} alt="app-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="the movie database logo" />
    </Content>
  </Wrapper>
);

export default Header;
