import React from 'react'
import Contact from '../contact/Contact'
import PaymentInfo from '../payment/PaymentInfo'
import Intro from './intro/Intro'
import Product from './product/Product'
function Home() {
    return (
        <>
            <img src="./images/homeBanner.jpg" className="Hero_img" alt="..." />
            {/* <img src="./images/doctor_banner.png" className="Hero_img" alt="..." /> */}
            {/* <Intro /> */}
            <Product />
            <div className="row bg-light">
                <div className="col">
                    <Contact />
                </div>
                <div className="col">
                    <PaymentInfo />
                </div>
            </div>
        </>
    )
}

export default Home
