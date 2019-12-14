import React from 'react';

var pops = ["desk", "dresser", "tv stand", "mirror", "shelves", "kallax"];
var lex = ["lex", "lex drawer unit", "rmchair", "lex desk", "rea rug", "lgot"];
var clum = ["IKEA ART EVENT 2019 Limited Collection", "The art of organizing: toy storage", "How to make a DIY canvas for your artwork"];

const DropContent = () => (
  <div className="sb-search-results">
    <ol className="dd-sb-search-results__list sb-search-results__container">
      {lex.map((item, i) => (
        <li style={{paddingBottom: '1rem', fontSize: 'large'}} className="dd-sb-search-results-item" key={i}>
          <a className="dd-sb-search-results-item__link" href={`https://www.ikea.com/us/en/search/?q=a${item}`}>
            a
            <b>{item}</b>
          </a>
        </li>
      ))}
    </ol>
    <ol className="dd-sb-search-results__list sb-search-results__container" style={{alignself: 'stretch', borderLeft: 'gainsboro 1px solid'}}>
      <li className="dd-sb-search-results-item--planner">
        <a className="dd-sb-pri-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
          Algot Planner
        </a>
      </li>
      <li className="dd-sb-search-results-item--planner">
        <a className="dd-sb-sec-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
          <b>Alex drawer unit</b>
        </a>
      </li>
      <li className="dd-sb-search-results-item--planner">
        <a className="dd-sb-sec-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
          <b>Algot Planner</b>
        </a>
      </li>
      {clum.map((item, i) => (
        <li style={{paddingBottom: '.5rem', fontSize: 'large'}} key={i}>
          <a className="dd-sb-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=a${item}`}>
            {item}
          </a>
        </li>
      ))}
    </ol>
    <ol className="dd-sb-search-results__list sb-search-results__container" style={{borderLeft: 'gainsboro 1px solid'}}>
      {lex.map((item, i) => (
        <li className="dd-sb-search-results-item" key={i}>
          <a className="dd-sb-search-results-item__link-rd" href={`https://www.ikea.com/us/en/search/?q=a${item}`}>
            a
            <b>{item}</b>
          </a>
        </li>
      ))}
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