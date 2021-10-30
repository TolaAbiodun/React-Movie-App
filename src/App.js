import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Styles
import {GlobalStyle} from './styles';

// Components
import Header from './components/Header';
import Home from './components/HomePage';
import Movie from './components/Movie';
import MovieNotFound from './components/MovieNotFound';


const App = () => (
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<MovieNotFound />} />
      </Routes>
      <GlobalStyle />
  </Router>
  )

export default App;
