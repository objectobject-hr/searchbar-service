import React from 'react';

var pops = ["desk", "dresser", "tv stand", "mirror", "shelves", "kallax"];
var lex = ["lex", "lex drawer unit", "rmchair", "lex desk", "rea rug", "lgot"];
var clum = ["IKEA ART EVENT 2019 Limited Collection", "The art of organizing: toy storage", "How to make a DIY canvas for your artwork"];

const DropContent = ({sliced, suggestions}) => (
  <div className="sb-search-results">
    <ol className="dd-sb-search-results__list sb-search-results__container">
      {suggestions.map((item, i) => (
        <li style={{paddingBottom: '1rem', fontSize: 'large'}} className="dd-sb-search-results-item" key={i}>
          <a className="dd-sb-cero-search-results-item__link" href={`https://www.ikea.com/us/en/search/?q=a${item.primero}`}>
          {item.letter}
            <b>{item.primero}</b>
          </a>
        </li>
      ))}
    </ol>
    <ol className="dd-sb-search-results__list sb-search-results__container" style={{alignself: 'stretch', borderLeft: 'gainsboro 1px solid'}}>
      <li className="dd-sb-search-results-item--planner">
        <a className="dd-sb-pri-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
        {suggestions[0].secondRow}
        </a>
      </li>
      <li className="dd-sb-search-results-item--planner">
        <a className="dd-sb-sec-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
          <b>{suggestions[1].secondRow}</b>
        </a>
      </li>
      <li className="dd-sb-search-results-item--planner">
        <a className="dd-sb-sec-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
          <b>{suggestions[2].secondRow}</b>
        </a>
      </li>
      {sliced.map((item, i) => (
        <li style={{paddingBottom: '.5rem', fontSize: 'large'}} key={i}>
          <a className="dd-sb-search-results-item__link-nd" href={`https://www.ikea.com/us/en/search/?q=alex`}>
            {item.secondRow}
          </a>
        </li>
      ))}
    </ol>
    <ol className="dd-sb-search-results__list sb-search-results__container dd-sb-search-results__container--product-suggestions" style={{borderLeft: 'gainsboro 1px solid'}}>
      {suggestions.map((item, i) => (
        <li className="dd-sb-search-results-item dd-sb-product-suggestions-item" key={i}>
          <a className="dd-sb-search-results-item__link dd-sb-product-suggestions-item__link" href={`https://www.ikea.com/us/en/search/?q=alex`}>
            <img className="dd-sb-product-suggestions-item__image" src={item.img}></img>
            <div className="dd-sb-product-suggestions-item__product-info">
              <p className="dd-sb-product-suggestions-item__heading">{item.nombre}</p>
              <p className="dd-sb-product-suggestions-item__details">
                <span className="dd-sb-product-suggestions-item__type">{item.descrip}</span>
                <span className="dd-sb-product-suggestions-item__measurements">
                  , {item.stats}"
                </span>
              </p>
            </div>
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