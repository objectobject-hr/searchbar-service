import React from 'react';

var cats = ['Customer Service', 'IKEA Family', 'IKEA for Business', 'IKEA Planning Tools', 'Track My Order', 'Find a Location', 'Credit Card'];
var links = ["https://info.ikea-usa.com/family/"];

const Arriba = (props) => (
  <div class="top-menu-d">
    <ul class="top-menu__contend-d">
      {cats.map((item, i) => (
        <li class="top-menu__item">
          <a href="https://www.ikea.com/us/en/customer-service/?itm_campaign=TopHeader&amp;itm_element=NavLevel1&amp;itm_content=TopNav>CustomerService" class="top-menu__link-d">
            <span class="top-menu__item header__h6" key={i}>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Arriba;