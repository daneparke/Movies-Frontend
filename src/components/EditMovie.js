import React from 'react'

const EditMovie = (props) => {
    let movie = props.movieList.map(movie => {
        if (movie.id === props.buttonID) {
            return (
                <div className='col-5 newMovieForm'>
                    <h3><b>{movie.title}</b></h3>
                    <div className='row'>
                        <label>Title</label>
                        <input onChange={props.handleInput} value={movie.title} className='inputFields' type='text' placeholder='Movie Title' name='title'></input>
                    </div>
                    <div className='row'>
                        <label>Director</label>
                        <input onChange={props.handleInput} value={movie.director} className='inputFields' type='text' placeholder='Name' name='director'></input>
                    </div>
                    <div className='row'>
                        <label>Year</label>
                        <input onChange={props.handleInput} value={movie.year} className='inputFields' type='text' placeholder='2000' name='year'></input>
                    </div>
                    <div className='row'>
                        <label>My Rating</label>
                        <input onChange={props.handleInput} value={movie.rating} className='inputFields' type='text' placeholder='#' name='rating'></input>
                    </div>
                    <div className='row'>
                        <label>Poster URL</label>
                        <input onChange={props.handleInput} value={movie.url} className='inputFields' type='text' placeholder='www.url.com' name='url'></input>
                    </div>
                    <button onClick={props.addMovie} type="submit" className="btn btn-primary">Add Movie</button>
                </div>
            )
        }
        else {
            return null
        }
    })
    return (
        <>
            <div className={`${props.showEditMovie ? '' : 'hidden'}`}>
                <div>{movie}</div>
            </div>
        </>
    )
}
export default EditMovie