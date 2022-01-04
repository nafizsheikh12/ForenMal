import React from 'react'
import './video.css'


const Video = () => {
    return (
        <div className='mainvideo'>
            <div className='video'>
             <iframe width="640" height="480" src="https://www.youtube.com/embed/yjlPpwsOMnQ" title="YouTube  video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Video
