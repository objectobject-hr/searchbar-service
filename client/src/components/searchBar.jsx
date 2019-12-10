import React from 'react';

const SearchBar = (props) => (
  <div data-namespace="search-box" data-version="v1.130.0">
    <form role="search" action="https://www.ikea.com/us/en/search/" class="search-box">
      <div class="search-field">
       ::before
        <input type="search" name="q" class="search-field__input" spellCheck="false" aria-label="Search by product" aria-placeholder="Search by product" autoCapitalize="off" autoComplete="off" autoCorrect="off"></input>    
        <span class="search-suggestions">
          "Search for"
          <ul class="search-suggestions">
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
*/