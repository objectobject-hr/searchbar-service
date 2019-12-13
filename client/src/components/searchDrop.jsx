import React from 'react';

var pops = ["desk", "dresser", "tv stand", "mirror", "shelves", "kallax"];

const SearchDrop = () => (
  <div className="sb-dropdown">
    <div className="sb-search-results">
      <div className="sb-search-results__container">
        <h2 className="sb-search-results__heading">Popular searches</h2>
        <ol className="dd-sb-search-results__list">
          {pops.map((item, i) => (
            <li class="dd-sb-search-results__list" key={i}>
              <a class="dd-sb-search-results-item__link" href={`https://www.ikea.com/us/en/search/?q=${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
)

export default SearchDrop;