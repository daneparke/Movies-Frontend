import React from 'react'

const Home = (props) => {
    return (
        <>
            <div className={`${props.showHome ? '' : 'hidden'}`}>
                <div>Danes Movie Ratings</div>
                <small>See if your opinions are correct!</small>
                <button>Lets See The Movies!</button>
            </div>
        </>
    )
}
export default Home