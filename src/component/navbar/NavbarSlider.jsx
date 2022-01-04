import React from 'react'

const NavbarSlider = () => {
    return (
        <>
       <div className="slider"> 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/s960x960/222168879_517242579605777_6255061430733633946_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFHzCSH5GnFJerVs4mCXf72DPxFvK6CfmgM_EW8roJ-aJlHnJkO7SWlu_3FLtuGaVnKwzvZ2aXgscEZsCAHGphn&_nc_ohc=gYa2caFLETIAX989Ge1&_nc_oc=AQl7_7glhoG2JToIWbL3Dmg0hUHUqB2ZxtgPKxjULMx-PU_T7qfyDgEbvs9WH8CZepI&_nc_ht=scontent.fdac24-1.fna&oh=00_AT-KCdB9RQE5odFODbLpoAtknSAReRIU9cG-MEOdzVZx7A&oe=61D8B683" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="" className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
             </button>
      </div>
     </div> 
        </>
    )
}

export default NavbarSlider
