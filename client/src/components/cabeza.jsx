import React from 'react';
import Arriba from './arriba.jsx';
import MainNav from './mainNav.jsx';
import QuickNav from './quickNav.jsx';

const Cabeza = (props) => (
    <header class="header" role="banner">
    <div class="messages"></div>
    <Arriba />
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__logo--wrapper">
          <a href="https://www.ikea.com/us/en/" class="header__logo">
            <img class="header__ikea-logo" src="https://www.ikea.com/us/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg" alt="IKEA" title="IKEA"></img>
            <span class="header__sr-only">IKEA</span>
          </a>
        </div>
        <MainNav />
        <QuickNav />
      </div>
    </div>
  </header>
)

export default Cabeza;

/*
<button id="SBmobMenuOpen" class="hnf-btn hnf-btn--icon" title="Menu" aria-expanded="true" aria-label="Menu">
            <span class="hnf-btn__icon-bg"></span>
            <span class="hnf-btn__copy">
              <svg class="hnf-svg-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,6V8H5V6ZM5,18H19V16H5Zm0-5H19V11H5Z"> </path>
              </svg>
              <span class="hnf-btn__label">Menu</span>
            </span>
          </button>
*/