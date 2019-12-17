import React from 'react';
import axios from 'axios';
import Cabeza from './cabeza.jsx';
import SearchBar from './searchBar.jsx';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flasher: "",
      searchText: "",
      barOpen: false,
      suggestions: [],
      slicedSugs: []
    };

    this.flasher = this.flasher.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.searchType = this.searchType.bind(this);
    this.barToggle = this.barToggle.bind(this);
  }

  barToggle() {
    this.setState({
      barOpen: !this.state.barOpen
    });
  }

  searchType(e) {
    this.setState({
      searchText: e.target.value
    });
    this.getProducts(e.target.value[0]);
    // if (this.state.searchText.length === 0) {
    //   this.flasher();
    // }
  }

  getProducts(id) {
    if (id === undefined) {
      id = "a";
    }
    axios.get(`/searchbar/${id}`)
    .then(({data}) => {
      var slug = data.slice(3)
      this.setState({
        suggestions: data,
        slicedSugs: slug
      });
      // console.log(this.state.suggestions)
    })
    .catch((err) => console.error(err));
  }

  flasher() {
    var lightning = ['categories', 'content', 'products'];
    var counter = 0;
    setInterval(() => {
      this.setState({
        flasher: lightning[counter],
      })
      counter++;
      if (counter === 3) {
        counter = 0;
      }
    }, 3000);
  }

  componentDidMount() {
    this.flasher();
    this.getProducts('a');
  }

  render() {
    return (
      <div className="sb-searchbar">
          <Cabeza />
          <div data-namespace="search-box-overlay"></div>
          <SearchBar sliced={this.state.slicedSugs} suggestions={this.state.suggestions} flasher={this.state.flasher} searchText={this.state.searchText} searchType={this.searchType} show={this.state.barOpen} onClose={this.barToggle}/>
      </div>
    )
  }
}

export default App;