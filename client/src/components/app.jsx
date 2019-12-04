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
      <div>
          <header class="header" role="banner">
            This is React!
          </header>
          <div data-namespace="search-box-overlay"></div>
          <div data-namespace="search-box">
            
          </div>
      </div>
    )
  }
}

export default App;