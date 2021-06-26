import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <>
            <div>
                <div className="text-center bg-image w-100">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1>
                                We Provide You with Top-Quality Printed Products<br />
                                @ Affordable Prices.
                            </h1>
                            <Link className="btn btn-outline-light btn-lg learn_more" to='!' role="button">Learn More</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="who">
                <div className="container">
                    <h1 className="tittle text-uppercase text-center mb-lg-5 mb-3 inner-tittle py-md-3">Who We Are</h1>
                        <div className="row">
                            <div className="col-md-6 order-2 order-lg-1">
                                    <div className="text-center">
                                            <h3 className="my-3 text-uppercase"><span className="fa fa-clone" aria-hidden="true"></span> Creative Design</h3>
                                            <p className="px-lg-3">We make best quality prescription stickers and envelopes, you won't find anywhere else.</p>
                                        <div className="bottom-gd fea active p-2" data-aos="fade-left">
                                            <h3 className="my-3 text-uppercase"><span className="fa fa-crosshairs" aria-hidden="true"></span> 100% Responsive</h3>
                                            <p>We at Rare Print Committed to deliver best quality product to our coustomer. Our products are much affordable than anyone you find in market, also we deliver the product right at your doorstep.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2">
                                    <img src="images/accomplishment-agreement-business-1249158.jpg" alt='...'/>
                                </div>
                        </div>
                </div>
            </div>
            <div className="bg-light py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="card">
                                <img src="images/sanket.jpeg" alt="..." style={{height: "200px", width: "100%"}}/>
                                <div className="card-title">
                                    Founder & CEO
                                </div>
                                    <h5 className="card-title">Sanket Pimpalkar</h5>
                                </div>
                            </div>
                        <div className="col-md-10">
                            <h2>CEO's Talk: </h2>
                            <p>I started rareprint.in because one day I observed that so many people are not able to understand medicine doses written by doctor and they endup getting help from others. So by recognizing this problem I created 'Prescription Stickers' on which doses are printed in understandable language. After launching Prescription Stickers in hometown Chandrapur, I got huge success. Now customers are demanding Prescription Stickers from all around India. I've now increased product line from stickers to envelopes, visiting cards, keychain and other innovated printing material. Now my aim is to innovate new problem solving product and to make rareprint.in a leader in Indian Printing Industry.</p>
                        </div>
                    </div>            
                    <div className="inner-sec-wthree speak">
                        <h1 className="tittle text-uppercase">Our Great Team</h1>
                        <div className="row mt-lg-5 mt-4">
                            <div className="col">
                                <div className="card">
                                    <div className="team-img mt-5">
                                        <img src="images/mahesh.jpg" className="img-fluid rounded-circle" alt="user-image"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">CTO / Developer</h5>
                                        <h4>Mahesh Gowardipe</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="team-img mt-5"> 
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="img-fluid rounded-circle" alt="user-image" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Managing and Operation</h5>
                                        <h4>Rinku Ghosh</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="team-img mt-5">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="img-fluid rounded-circle" alt="user-image"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Sales Manager</h5>
                                        <h3>Tabassum Sheikh</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="team-img mt-5">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="img-fluid rounded-circle" alt="user-image"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Designer</h5>
                                        <h3>Anosh Dilpe</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About