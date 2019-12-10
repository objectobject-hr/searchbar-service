import React from 'react';
import axios from 'axios';
import Cabeza from './cabeza.jsx';
import SearchBar from './searchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div class="searchbar">
          <Cabeza />
          <div class="searchbar-div" data-namespace="search-box-overlay"></div>
          <SearchBar />
      </div>
    )
  }
}

export default App;