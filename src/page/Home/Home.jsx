import React from 'react'

//component
import Navbar from '../../component/navbar/Navbar'
import NavbarSlider from '../../component/navbar/NavbarSlider'
import About from '../../component/about/About'
import Video from '../../component/video/Video'
import Footer from '../../component/Footer'

const Home = () => {
    return (
        <>
            <Navbar/>
            <NavbarSlider/>
            <About/>
            <Video/>
            <Footer/>
        </>
    )
}

export default Home
