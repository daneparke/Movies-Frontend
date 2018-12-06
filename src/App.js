import React, { Component } from 'react';
import Home from './components/Home'
import NewMovie from './components/NewMovie'
import EditMovie from './components/EditMovie'
import { Route } from 'react-router-dom'
import AllMovies from './components/AllMovies'



import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      director: '',
      year: undefined,
      rating: undefined,
      url: '',
      movieList: [],
      showHomeButton: true,
      showNewMovie: true,
      showEditMovie: true,
      showAllMovies: true,
      allInputted: false,
      buttonID: 2
    }
  }

  componentDidMount() {
    this.loadMovies()
  }

  // checkIfAllInputted = () => {
  //   if (this.state.title.length === 0 || this.state.director.length === 0 || this.state.url.length === 0 || this.state.year.length === 0 || this.state.rating.length === 0) {
  //     alert('Please fill Out all Fields')
  //   }
  // }

  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
    if (this.state.title.length > 0 && this.state.director.length > 0 && this.state.url.length > 0 && this.state.year.length > 0 && this.state.rating.length > 0) {
      this.setState({
        allInputted: true,
      })
    }
    else if (this.state.rating > 5 || this.state.rating < 0) {
      alert("The Rating Scale Is From 0-5")
    }
  }

  homeButton = (event) => {
    this.setState({
      showHomeButton: false,
      showAllMovies: true,
    })
  }
  newMovieButton = (event) => {
    this.setState({
      showAllMovies: false,
      showNewMovie: true
    })
  }

  addMovie = (event) => {
    if (this.state.title.length === 0 || this.state.director.length === 0 || this.state.url.length === 0 || this.state.year.length === 0 || this.state.rating.length === 0) {
      alert("Please Fill Out All Fields")
    } else if (this.state.rating > 5 || this.state.rating < 0) {
      alert("The Rating Scale Is From 0-5")
    } else {
      var newMovie = {
        title: this.state.title,
        director: this.state.director,
        year: this.state.year,
        rating: this.state.rating,
        url: this.state.url,
      }
      fetch('http://localhost:3004/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie)
      })
        .then(response => response.json())
        .then(() => this.loadMovies())
        .then((response) => {
          this.setState({
            allInputted: false,
            title: '',
            director: '',
            year: undefined,
            rating: undefined,
            url: '',
          })
        })
    }
  }
  editMovieButton = (event) => {
    this.setState({
      buttonID: event.target.id,
    })
  }
  // updateMovie = (event) => {
  //   var updatedMovie = {
  //     title: this.state.title,
  //     director: this.state.director,
  //     year: this.state.year,
  //     rating: this.state.rating,
  //     url: this.state.url,
  //   }
  // }
  deleteMovie = (event) => {
    fetch(`http://localhost:3004/movies/${event.target.id}`, {
      method: 'DELETE',
    }).then(() => this.loadMovies())
  }

  loadMovies = () => {
    fetch("http://localhost:3004/movies")
      .then(result => result.json())
      .then((response) => {
        this.setState({
          movieList: response.movies
        })
      })
  }
  render() {
    return (
      <>
        <div className='header'>
          <div>Danes Movie Ratings</div>
          <small>See if your opinions are correct!</small>
        </div>
        <Route path='/' exact render={() => (<Home homeButton={this.homeButton} {...this.state} />)} />
        {/* // <Home homeButton={this.homeButton} {...this.state} /> */}
        <Route path='/newmovie' render={() => (<NewMovie addMovie={this.addMovie} handleInput={this.handleInput} {...this.state} />)} />
        <Route path='/editmovies' render={() => (<EditMovie {...this.state} />)} />
        <Route path='/movies' render={() => (<AllMovies loadMovies={this.loadMovies} deleteMovie={this.deleteMovie} editMovieButton={this.editMovieButton} newMovieButton={this.newMovieButton}{...this.state} />)} />
      </>
    );
  }
}

export default App;
