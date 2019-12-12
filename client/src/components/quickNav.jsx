import React from 'react';

const QuickNav = (props) => (
  <nav className="header__quick-nav">
    <ul className="header__icon-list" data-shopping-links>
      <li className="header__icon-list-item">
        <a className="sb-a hnf-btn hnf-btn--icon" href="https://secure.ikea.com/webapp/wcs/stores/servlet/lononForm?storeId=12&landId=-1" title="My Profile" data-profile-link>
          <span className="hnf-btn__icon-bg"></span>
          <span className="hnf-btn__copy">
            <svg className="hnf-svg-icon" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M15,12H9a5,5,0,0,0-5,5v4H20V17A5,5,0,0,0,15,12Zm3,7H6V17a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3Zm-6-8A4,4,0,1,0,8,7,4,4,0,0,0,12,11Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z"></path>
            </svg>
            <span className="hnf-btn__label">My Profile</span>
          </span>    
        </a>
      </li> 
      <li className="header__icon-list-item">
        <a className="sb-a hnf-btn hnf-btn--icon" href="https://order.ikea.com/us/en/checkout/shoppinglist/" title="Shopping List" data-profile-link>
          <span className="hnf-btn__icon-bg"></span>
          <span className="hnf-btn__copy">
            <svg className="hnf-svg-icon" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M16,14l2-2V22H2V2H16L14,4H4V20H16ZM12,6H6V8h6ZM6,12H8V10H6Zm-.23,6.29,4.66-2.05L22,4.66,19.34,2,7.72,13.73Z"></path>
            </svg>
            <span className="hnf-btn__label">Shopping List</span>
          </span>    
        </a>
      </li> 
      <li className="header__icon-list-item">
        <a className="sb-a hnf-btn hnf-btn--icon" href="https://secure.ikea.com/us/en/mcommerce/shoppingcart" title="Shopping bag" data-profile-link>
          <span className="hnf-btn__icon-bg"></span>
          <span className="hnf-btn__copy js-shopping-cart-icon">
            <svg className="hnf-svg-icon" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M16.677 10l-1.245-3.114L12.646 5h-1.292L8.568 6.886 7.323 10H2l2.544 7.633A2 2 0 0 0 6.441 19h11.117a2 2 0 0 0 1.898-1.368L22 10zm-6-3h2.646l1.2 3H9.477zm6.881 10H6.441l-1.666-5h14.45z"></path>
            </svg>
            <span className="hnf-btn__label">Shopping Bag</span>
            <span className="header__shopping-bag-quantity hnf-btn__badge">1</span>  
          </span>
        </a>
      </li> 
    </ul>
  </nav>
)

export default QuickNav;