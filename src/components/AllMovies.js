import React from 'react'
import { Link } from 'react-router-dom'

const AllMovies = (props) => {
    let movies = props.movieList.map(movie => {
        return (
            <div key={`movie${movie.id}`} className='row'>
                <div className='col-2'>{movie.title}</div>
                <div className='col-2'>{movie.director}</div>
                <div className='col-2'>{movie.year}</div>
                <div className='col-2'>{movie.rating}</div>
                <button onClick={props.deleteMovie} id={movie.id} className='col-2'>Delete</button>
                {/* <button onClick={props.editMovieButton} id={movie.id} className='col-2'>Edit</button> */}
                <Link className='col-2' to='/editmovies'><button onClick={props.editMovieButton} id={movie.id}>Edit</button></Link>
            </div>
        )
    })
    return (
        <>
            <div className={`${props.showAllMovies ? '' : 'hidden'}`}>
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