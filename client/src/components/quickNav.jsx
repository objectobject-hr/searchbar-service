import React from 'react';

const QuickNav = (props) => (
  <nav class="header__quick-nav">
    <ul class="header__icon-list" data-shopping-links>
      <li class="header__icon-list-item">
        <a class="hnf-btn hnf-btn--icon" href="https://secure.ikea.com/webapp/wcs/stores/servlet/lononForm?storeId=12&landId=-1" title="My Profile" data-profile-link>
          <span class="hnf-btn__icon-bg"></span>
          <span class="hnf-btn__ copy">
            <svg class="hnf-svg-copy" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M15,12H9a5,5,0,0,0-5,5v4H20V17A5,5,0,0,0,15,12Zm3,7H6V17a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3Zm-6-8A4,4,0,1,0,8,7,4,4,0,0,0,12,11Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z"></path>
            </svg>
            <span class="hnf-btn__label">My Profile</span>
            <span></span>
          </span>    
        </a>
      </li> 
    </ul>
  </nav>
)

export default QuickNav;