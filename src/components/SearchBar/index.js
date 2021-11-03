import React , {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

// Import styles
import {Wrapper, Content} from './SearchBar.styles';

// Import Search Icon
import searchIcon from '../../images/search-icon.svg';

// Searbar component

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    // Skip initial render in use effect
    useEffect(() => {
      if (initial.current) {
        initial.current = false;
        return;
      }

      // Create slight delay to fetch search term
      const timer = setTimeout(() => {
        setSearchTerm(state);
      }, 600);

      // Clear timer
      return () => clearTimeout(timer);
    }, [setSearchTerm, state]);


    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type='text' 
                       placeholder='Search' 
                       onChange = {e => setState(e.currentTarget.value)}
                       value = {state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
  
}

export default SearchBar;
 

