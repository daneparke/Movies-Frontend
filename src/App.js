import React, { Component } from 'react';
import Home from './components/Home'
import NewMovie from './components/NewMovie'
import EditMovie from './components/EditMovie'
import { Route } from 'react-router-dom'
import AllMovies from './components/AllMovies'
import OneMovie from './components/OneMovie'



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
      allInputted: false,
      buttonID: 2,
      searchedMovie: [],
      movie: []
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
    if (this.state.title.length > 0 && this.state.director.length > 0 && this.state.url.length > 0 && this.state.year.length > 0 && this.state.rating > 0) {
      this.setState({
        allInputted: true,
      })
    }
  }
  editMovieButton = (event) => {
    fetch(`http://localhost:3004/movies/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          movie: [response],
          rating: response.rating,
          title: response.title,
          director: response.director,
          url: response.url,
          year: response.year,
          allInputted: true
        })
      })
  }
  oneMovieClick = (event) => {
    fetch(`http://localhost:3004/movies/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          movie: [response]
        })
      })
  }
  editMovie = (event) => {
    if (this.state.allInputted === false) {
      alert('Please Fill Out All Fields')
    }
    else if (this.state.rating > 5) {
      alert('Ratings must be 1-5')
    }
    else {
      var updatedMovie = {
        title: this.state.title,
        director: this.state.director,
        rating: this.state.rating,
        url: this.state.url,
        year: this.state.year
      }
      fetch(`http://localhost:3004/movies/${event.target.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMovie)
      }).then(response => response.json())
        .then(() => this.loadMovies()).then(() => {
          this.setState({
            reviewInputted: false,
            rating: 0,
            title: '',
            director: '',
            movie: [],
            year: 0,
            url: ''
          })
        })
    }
  }
  addMovie = (event) => {
    if (this.state.rating > 5 || this.state.rating < 0) {
      alert("The Rating Scale Is From 0-5")
    } else if (this.state.allInputted === true) {
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
          <div><b>Dane's Movie Ratings</b></div>
          <small><b>See if your opinions are correct!</b></small>
        </div>
        <Route path='/' exact render={() => (<Home homeButton={this.homeButton} {...this.state} />)} />
        <Route path='/newmovie' render={() => (<NewMovie addMovie={this.addMovie} handleInput={this.handleInput} {...this.state} />)} />
        <Route path='/editmovies' render={() => (<EditMovie handleInput={this.handleInput} editMovie={this.editMovie}{...this.state} />)} />
        <Route path='/movies' render={() => (<AllMovies oneMovieClick={this.oneMovieClick} loadMovies={this.loadMovies} deleteMovie={this.deleteMovie} editMovieButton={this.editMovieButton} newMovieButton={this.newMovieButton}{...this.state} />)} />
        <Route path='/movieInfo' render={() => (<OneMovie {...this.state} />)} />

      </>
    );
  }
}

export default App;
