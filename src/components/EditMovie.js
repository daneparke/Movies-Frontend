import React from 'react'

const EditMovie = (props) => {
    return (
        <>
            <div className={`${props.showEditMovie ? '' : 'hidden'}`}>
                {/* <div className='jobForm'>
                    <h3><b>Add a Job</b></h3>
                    <label>Title</label>
                    <input onChange={props.handleInput} value={props.title} className='inputFields' type='text' placeholder='Job Title' name='title' />
                    <label>Compensation</label>
                    <input onChange={props.handleInput} value={props.compensation} className='inputFields' type='text' placeholder='$##.##' name='compensation' />
                    <label>Description</label>
                    <input onChange={props.handleInput} value={props.description} className='descriptionCont inputFields' type='text' placeholder='Description of Job' name='description' />
                    <button onClick={props.submitJob} type="submit" className="btn btnColor">Submit</button>
                </div> */}
            </div>
        </>
    )
}
export default EditMovie