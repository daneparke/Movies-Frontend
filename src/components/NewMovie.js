import React from 'react'
import { Link } from 'react-router-dom'


const NewMovie = (props) => {
    return (
        <>
            <div className={`${props.showNewMovie ? '' : 'hidden'}`}>
                <div className='col-5 newMovieForm'>
                    <h3><b>Add A Movie</b></h3>
                    <label>Title</label>
                    <input onChange={props.handleInput} value={props.title} className='inputFields' type='text' placeholder='Movie Title' name='title' />
                    <label>Director</label>
                    <input onChange={props.handleInput} value={props.director} className='inputFields' type='text' placeholder='Name' name='director' />
                    <label>Year</label>
                    <input onChange={props.handleInput} value={props.year} className='inputFields' type='text' placeholder='2000' name='year' />
                    <label>My Rating</label>
                    <input onChange={props.handleInput} value={props.rating} className='inputFields' type='text' placeholder='#' name='rating' />
                    <label>Poster URL</label>
                    <input onChange={props.handleInput} value={props.url} className='inputFields' type='text' placeholder='www.url.com' name='url' />
                    <Link to={`${props.allInputted ? '/movies' : '/newmovie'}`}> <button onClick={props.addMovie} type="submit" className="btn btn-dark">Add Movie</button></Link>

                </div>
            </div>
        </>
    )
}
export default NewMovie