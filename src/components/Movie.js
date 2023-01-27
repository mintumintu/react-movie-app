import React from 'react'

const Movie = (props)=>{
    return(
        <>
            <div className='movie-container'>
                <div className='poster-container'>
                {props.poster}
                </div>
            </div>
        </>
    );
}

export default Movie;