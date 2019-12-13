import React from 'react';

var pops = ["desk", "dresser", "tv stand", "mirror", "shelves", "kallax"];

const DropContent = () => (
  <div>
    <ol className="search-results__list">
      <li className="search-results-item">
        <a className="search-results-item__link" href="https://www.ikea.com/us/en/search/?q=alex">
          a
          <b>lex</b>
        </a>
      </li>
    </ol>
  </div>
)

export default DropContent;

  // <div className="sb-search-results__container">
  //   <h2 className="sb-search-results__heading">Popular searches</h2>
  //   <ol className="dd-sb-search-results__list">
  //     {pops.map((item, i) => (
  //       <li className="dd-sb-search-results__list" key={i}>
  //         <a className="dd-sb-search-results-item__link sb-a" href={`https://www.ikea.com/us/en/search/?q=${item}`}>
  //           {item}
  //         </a>
  //       </li>
  //     ))}
  //   </ol>
  // </div>