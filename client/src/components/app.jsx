import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div class="searchbar-div">
          <header class="header" role="banner">
            <div class="searchbar-div" class="headermessages"></div>
            <div class="searchbar-div" class="header-top-menu-full">
              <ul class="header-top-menu-content">
                <li class="header-top-menu-items">
                  <a class="searchbar-a" class="header-top-menu-link">
                    <span class="header-top-menu-item">Customer Service</span>
                  </a>
                </li>
                <li class="header-top-menu-items">
                  <a class="header-top-menu-link">
                    <span class="header-top-menu-item">IKEA Family</span>
                  </a>
                </li>
                <li class="header-top-menu-items">
                  <a class="header-top-menu-link">
                    <span class="header-top-menu-item">IKEA For Business</span>
                  </a>
                </li>
                <li class="header-top-menu-items">
                  <a class="header-top-menu-link">
                    <span class="header-top-menu-item">IKEA planning Tools</span>
                  </a>
                </li>
                <li class="header-top-menu-items">
                  <a class="header-top-menu-link">
                    <span class="header-top-menu-item">Track My Order</span>
                  </a>
                </li>
                <li class="header-top-menu-items">
                  <a class="header-top-menu-link">
                    <span class="header-top-menu-item">Find a Location</span>
                  </a>
                </li>
                <li class="header-top-menu-items">
                  <a class="header-top-menu-link">
                    <span class="header-top-menu-item">Credit Card</span>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div class="searchbar-div" data-namespace="search-box-overlay"></div>
          <div class="searchbar-div" data-namespace="search-box">
            
          </div>
      </div>
    )
  }
}

export default App;