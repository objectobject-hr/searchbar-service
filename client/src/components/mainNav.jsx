import React from 'react';

const MainNav = (props) => (
  <nav class="header__main-nav">
    <div class="header__main-nav--wrapper">
      <ul class="main-bygga-menu" data-menu-links>
        <li class="main-bygga-menu__item">
          <a href="https://wwww.ikea.com/us/en/ikea-family/" class="sb-a main-bygga-menu__link hnf-link--black">
            <span class="main-bygga-menu__title">Offers</span>
          </a>
        </li>
        <li class="main-bygga-menu__item">
          <button class="main-bygga-menu__button hnf-trailing-icon" aria-expanded="false">
            <span class="main-bygga-menu__title">Products</span>
            <svg class="hnf-svg-icon hnf-svg-icon--100 main-bygga-menu__button--svg" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"></path>
            </svg>
          </button>
        </li>
        <li class="main-bygga-menu__item">
          <button class="main-bygga-menu__button hnf-trailing-icon" aria-expanded="false">
            <span class="main-bygga-menu__title">Rooms</span>
            <svg class="hnf-svg-icon hnf-svg-icon--100 main-bygga-menu__button--svg" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"></path>
            </svg>
          </button>
        </li>
        <li class="main-bygga-menu__item">
          <a href="https://wwww.ikea.com/us/en/ikea-family/" class="sb-a main-bygga-menu__link hnf-link--black">
            <span class="main-bygga-menu__title">Ideas & Inspiration</span>
          </a>
        </li>
        <li class="main-bygga-menu__item">
          <a href="https://wwww.ikea.com/us/en/ikea-family/" class="sb-a main-bygga-menu__link hnf-link--black">
            <span class="main-bygga-menu__title">New at IKEA</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default MainNav;

/*
Pull down menu
<div class="main-bygga-menu__sub main-bygga-menu__dropdown main-bygga-menu__dropdown--products main-bygga-menu__sub--overflow" aria-hidden="true" data-title-more="More" data-title-explore="Explore">
            <div class="main-bygga-menu__dropdown__col">
              <span class="main-bygga-menu__dropdown__heading">"Products"</span>
              <button class="main-bygga-menu__button-mob main-bygga-menu__button">
                <svg class="hnf-svg-icon hnf-svg-icon--100 main-bygga-menu__button--svg" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M11.7,18.22,6.43,13H20V11H6.4l5.31-5.37L10.29,4.22,2.59,12l7.71,7.64Z"></path>
                </svg>
                <span class="main-bygga-menu-title">Products</span>
              </button>
              <ul class="main-bygga-menu-level1" aria-label="Submenu for Products">
                <li class="main-bygga-menu-level1-item">
                  <button aria-expanded="false" class="main-bygga-menu-level1-item-button">Furniture</button>
                  <ul data-tracking-label="Products | Furniture" class="main-bygga-menu-sub-level2-hidden" aria-hidden="true" aria-label="Submenu for Furniture">
                    <li>
                      <button class="main-bygga-menu-button-mob">
                        <svg class="hnf-svg-icon hnf-svg-icon--150 main-bygga-menu__dropdown__heading-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M11.7,18.22,6.43,13H20V11H6.4l5.31-5.37L10.29,4.22,2.59,12l7.71,7.64Z"></path>
                        </svg>
                        <span class="main-bygga-menu__title">Furniture</span>
                      </button>
                    </li>
                    <li class="main-bygga-menu__level1__item main-bygga-menu__lebel1__item--more" data-more-link>
                      <button aria-expanded="false" class="main-bygga-menu__level1__item-button">+ More</button>
                    </li>
                    <li class="main-bygga-menu__level1__item main-bygga-menu__level1__item--overflow">
                      <button aria-expanded="false" class="main-bygga-menu__level1__item-button">Lightning</button>
                      <ul data-tracking-label="Products | Outdoor" class="main-bygga-menu__level2 main-bygga-menu__level2--hidden" aria-hidden="true" aria-label="Submenu for Outdoor">
                        <li></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="main-bygga-menu__dropdonw__heading">
              <span class="main-bygga-menu__dropdown__heading">Deals & Steals</span>
              <ul data-tracking-lable="Deals & Steals" class="main-bygga-menu__level1" aria-label="Submenu for Deals & Steals">
                <li class="main-bygga-menu__level1__item">
                  <a href="https://www.ikea.com/ext/us/last-chance/">Last Chance</a>
                </li>
              </ul>
            </div>
          </div>
*/