import React from 'react'
import { Link } from 'react-router-dom'

const OneMovie = (props) => {
    let movie = props.movie.map(movie => {
        return (
            <div className='oneMovie' key={`movie ${movie.id}`}>
                <div><b>{movie.title}</b></div>
                <img alt={`${movie.title} Poster`} src={movie.url} />
                <div className='col-5 addForm'>
                    <label>Title: {movie.title}</label>
                    <br></br>
                    <label>Director: {movie.director}</label>
                    <br></br>
                    <label>Year: {movie.year}</label>
                    <br></br>
                    <label>My Rating: {movie.rating}</label>
                    <br></br>
                    <Link to='/movies'><button>Back To Movies</button></Link>
                </div>
            </div >
        )
    })
    return (
        <>
            <div>
                <div>{movie}</div>
            </div>
        </>
    )
}
export default OneMovie