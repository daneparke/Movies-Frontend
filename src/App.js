import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      director: '',
      year: 0,
      rating: 0,
      url: '',
      movieList: [],
      showHome: true,
      showNewMovie: false,
      showEditMovie: false,
      showAllMovies: false,
    }
  }
  componentDidMount() {
    this.loadListings()
  }

  homeButton(event) {
    this.setState({
      showHome: false,
    })
  }

  loadMovies = async () => {
    let result = await fetch("http://localhost:3004/movies")
    let data = await result.json()
    this.setState({
      movieList: data.movies
    })
    return data
  }
  render() {
    return (
      <>
        <Home {...this.state} />
        <NewMovie {...this.state} />
        <EditMovie {...this.state} />
        <AllMovies {...this.state} />
      </>
    );
  }
}

export default App;
