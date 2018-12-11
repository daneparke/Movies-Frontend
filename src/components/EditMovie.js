import React from 'react'
import { Link } from 'react-router-dom'

const EditMovie = (props) => {
    let movie = props.movie.map(movie => {
        return (
            <div className='editMovies' key={`movie ${movie.id}`}>
                <div><b>{movie.title}</b></div>
                <img alt={`${movie.title} Poster`} src={movie.url} />
                <div className='col-5 addForm'>
                    <label>Title</label>
                    <input onChange={props.handleInput} className='movieInput' type='text' defaultValue={movie.title} name='title' />
                    <br></br>
                    <label>Director</label>
                    <input onChange={props.handleInput} className='movieInput' type='text' defaultValue={movie.director} name='director' />
                    <br></br>
                    <label>Year</label>
                    <input onChange={props.handleInput} className='movieInput' type='text' defaultValue={movie.year} name='year' />
                    <br></br>
                    <label>My Rating</label>
                    <input onChange={props.handleInput} className='movieInput ratingInput' defaultValue={movie.rating} type='number' min='1' max='5' name='rating' />
                    <br></br>
                    <label>Poster URL</label>
                    <input onChange={props.handleInput} className='movieInput' type='text' defaultValue={movie.url} name='url' />
                </div>
                <Link to={`${props.allInputted ? '/movies' : '/edit'}`}><button onClick={props.editMovie} id={movie.id}>Edit Movie</button></Link>
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
export default EditMovie