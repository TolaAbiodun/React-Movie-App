import React from 'react';

// Styles
import {GlobalStyle} from './styles';

// Components
import Header from './components/Header';
import Home from './components/HomePage';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  )}

export default App;
