import React from 'react';

const SearchBar = (props) => (
  <div data-namespace="search-box" data-version="v1.130.0">
    <form role="search" action="https://www.ikea.com/us/en/search/" class="search-box">
      <div class="search-field">
        <span class="hnf-btn__icon-bg"></span>
        <input type="search" name="q" class="search-field__input" spellCheck="false" aria-label="Search by product" aria-placeholder="Search by product" autoCapitalize="off" autoComplete="off" autoCorrect="off"></input>    
        <span class="search-suggestions">
          <span class="hnf-btn__copy searchbar-padder">
            <svg class="hnf-svg-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <span class="hnf-btn__label">Search</span>
          </span>
          Search for
          <ul class="search-suggestions__list searchbar-padder">
            <li aria-hidden="false">categories</li>
          </ul>
        </span>    
      </div>
    </form>
  </div>  
)

export default SearchBar; 

/*  
class="searchbar-div"

class="search-suggestions__item"
 
<li aria-hidden="true">content</li>
            <li aria-hidden="true">products</li>

            <span class="hnf-btn__copy">
            <svg class="hnf-svg-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <span class="hnf-btn__label">Search</span>
          </span>
*/