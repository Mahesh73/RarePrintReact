import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="ftr">
            <div className="text-white text-lg-start">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0 pl-5">
                            <h5>RARE PRINT</h5>
                            <p style={{color: "#a59887"}}>Rare Print is a outcome of dreams of it's founders and hard work of it's team. We have been a reliable organisational in helping patients get medication timely, properly and easily by our unique products. We aims at simplifying and easing the medication process. We offer different types of products which also helps doctors and chemist, improve the life is their patients. Our products and services includes prescription machine, prescription roll, prescription pad, prescription envelop, prescription file and other related products and services.</p>
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="row">
                                <div className="col pl-5">
                                    <h5>LINKS</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/About'>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to='/Contact'>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Payment Info</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Blogs</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h5 className="text-uppercase mb-0">Social</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link to="https://api.whatsapp.com/send?phone=+919325822180"><img src="./images/whatsapp.svg" height="20" width="20" alt="whatsapp"/> +91 9325822180</Link>
                                        </li>
                                        <li>
                                            <Link to="https://m.facebook.com/rareprint.in/?ref=bookmarks" target="_blank"><img src="./images/facebook.png" height="20" width="20" alt="Facebook"/> Facebook</Link>
                                        </li>
                                        <li>
                                            <Link to="/"><img src="./images/youtube.svg" height="20" width="20" alt="Instagram"/> Youtube</Link>
                                        </li>
                                        <li>
                                            <Link to="/"><img src="./images/instagram.png" height="20" width="20" alt="Instagram"/> Instagram</Link>
                                        </li>
                                        <li>
                                            <Link to="/"><img src="./images/gmail.png" height="20" width="20" alt="Instagram"/> sales@rareprint.in</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3 copy_right">© {year} Copyright :<Link to="/" className="text-white"> rareprint.in</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
