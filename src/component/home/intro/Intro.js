import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <>
            <section id="intro" className="d-flex align-items-center">
                <div className="intro container">
                    <div className="row">
                            <div className="col-md-6 order-2 order-lg-1 intro-img">
                                <img src="images/undraw_medicine_b1ol.svg" className="img-fluid_animated" alt="doctor clinic stationary"/>
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                <h1>Transform your Clinic Stationary into our <strong className="brandName">Rareprint's</strong> Products</h1>
                                <p className="my-3">We help you to change your clinic's stationary with modern trends.</p>
                                <div className="mt-3 text-center">
                                    <Link className="btn btn-outline-primary" data-mdb-ripple-color="dark" to="/product">check produts</Link>
                                </div>
                            </div>
                        </div>        
                </div>
            </section>
        </>
    )
}

export default Intro
