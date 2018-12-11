import React from 'react'
import { Link } from 'react-router-dom'



const Home = (props) => {
    return (
        <>
            <div className='homeScreen'>
                <button><Link to='/movies'>Lets See The Movies</Link></button>
            </div>
        </>
    )
}
export default Home