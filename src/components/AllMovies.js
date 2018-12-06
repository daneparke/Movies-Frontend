import React from 'react'

const AllMovies = (props) => {
    let movies = props.movieList.map(movie => {
        return (
            <div className='jobListings'>
                <h4 className='newJobTitle'>{movie.title}</h4>
                <small>{movie.director}</small>
                <p className='newJobDescription'>{movie.year}</p>
                <p className='newJobDescription'>{movie.rating}</p>
                <p className='newJobDescription'>{movie.url}</p>
            </div>
        )
    })
    return (
        <>
            <div className={`${props.showAllMovies ? '' : 'hidden'}`}>
                <div> ALL MOVIES</div>
                <div>{movies}</div>

            </div>
        </>
    )
}
export default AllMovies