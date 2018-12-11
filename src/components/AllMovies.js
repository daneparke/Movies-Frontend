import React from 'react'
import { Link } from 'react-router-dom'

const AllMovies = (props) => {
    let movies = props.movieList.map(movie => {
        return (
            <div key={`movie${movie.id}`} className='row'>
                <Link className='col-8 container' to='/movieInfo' id={movie.id} onClick={props.oneMovieClick}>
                    <div id={movie.id} className='row'>
                        <div id={movie.id} className='col-3'>{movie.title}</div>
                        <div id={movie.id} className='col-3'>{movie.director}</div>
                        <div id={movie.id} className='col-3'>{movie.year}</div>
                        <div id={movie.id} className='col-3'>{movie.rating}</div>
                    </div>
                </Link>
                <div className='container col-4'>
                    <button onClick={props.deleteMovie} id={movie.id} className='col-4'>Delete</button>
                    <Link className='col-4' to='/editmovies'><button onClick={props.editMovieButton} id={movie.id}>Edit</button></Link>
                </div>
            </div>
        )
    })
    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-9'>ALL MOVIES</div>
                    <button className='col-3'><Link to='/newmovie'>New Movie</Link></button>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col-2'><u>Title</u></div>
                    <div className='col-2'><u>Director</u></div>
                    <div className='col-2'><u>Year</u></div>
                    <div className='col-2'><u>Rating</u></div>
                </div>
                <br></br>
                <div>{movies}</div>

            </div>
        </>
    )
}
export default AllMovies