import React from 'react';

const SearchBar = (props) => (
  <div data-namespace="search-box" data-version="v1.130.0">
    <form role="search" action="https://www.ikea.com/us/en/search/" class="search-box">
      <div class="search-field">
        <input type="search" name="q" spellCheck="false" aria-label="Search by product" aria-placeholder="Search by product" autoCapitalize="off" autoComplete="off" autoCorrect="off"></input>    
        <span >
          </span>    
      </div>
    </form>
  </div>  
)

export default SearchBar; 

/*   ::before
class="searchbar-div"
class="search-field__input"
class="search-suggestions__item"
class="search-suggetions__list"
 class="search-suggestions"
 <li aria-hidden="false">categories</li>
              <li aria-hidden="false">content</li>
                <li aria-hidden="true">products</li>
                          <ul ></ul>    
*/