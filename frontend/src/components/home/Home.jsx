import React from 'react'
import './home.scss'
import homeScreenMainContainerImg from '../../images/homeScreenMainContainerImg.png'

const Home = () => {
    return (
        <>
            <div id="homeContainer">
                <div id="homeMainContainer">
                    <div id="homeMainContainerText">
                        <h2>We bring <span>terrfic change</span> in you.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora optio voluptatibus quisquam voluptates consectetur, rem debitis animi veritatis odit maiores nulla facere suscipit a culpa blanditiis aperiam corrupti doloremque.</p>
                        <button>Get Started <span>➔</span></button>
                    </div>
                    <div id="homeMainContainerImg">
                        <img src={homeScreenMainContainerImg} id="homeScreenMainContainerImage" alt="Featured Vector Graphic" />
                    </div>
                </div>
                <div id="whyUsHomeContainer">

                </div>
            </div>
        </>
    )
}

export default Home
