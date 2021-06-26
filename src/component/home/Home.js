import React from 'react'
import Intro from './intro/Intro'
import Product from './product/Product'
import Service from './service/Service'
function Home() {
    return (
        <>
            <img src="./images/doctor_banner.png" className="Hero_img" alt="..."/>
            <Intro />
            <Product />
            {/* <Service /> */}
        </>
    )
}

export default Home
