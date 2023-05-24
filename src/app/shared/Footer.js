import React from 'react'
import insta from '../data/instagram.json'

const Footer = () => {
    return (
        <>
            <footer className="section-padding footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box mb-md-40">
                                <h4 className="text-custom-white fw-600">About Us</h4>
                                <p className="text-custom-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <p className="text-custom-white">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </p>
                                <ul className="custom-flex socials">
                                    <li><a href="#" className="text-custom-white fs-14"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="text-custom-white fs-14"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="text-custom-white fs-14"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href="#" className="text-custom-white fs-14"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box mb-md-40">
                                <h4 className="text-custom-white fw-600">Quick Links</h4>
                                <ul className="custom links">
                                    <li>
                                        <a href="/" className="text-custom-white">Home</a>
                                    </li>
                                    <li>
                                        <a href="/hotel-grid" className="text-custom-white">Hotels</a>
                                    </li>
                                    <li>
                                        <a href="/flight-grid" className="text-custom-white">Flights</a>
                                    </li>
                                    <li>
                                        <a href="/cruise-grid" className="text-custom-white">Cruise</a>
                                    </li>
                                    <li>
                                        <a href="/blog-grid" className="text-custom-white">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/error-page" className="text-custom-white">404</a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-custom-white">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box mb-sm-40">
                                <h4 className="text-custom-white fw-600">Instagram</h4>
                                <ul className="custom instagram gallery-grid">
                                    {insta.map(item => (
                                        <li key={item.id}>
                                            <a
                                                href={item.image}
                                                className="text-custom-white popup">
                                                <img
                                                    src={item.image}
                                                    className="image-fit" alt="img" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box mb-sm-40">
                                <h4 className="text-custom-white fw-600">Newsletter</h4>
                                <div className="newsletter">
                                    <p className="text-custom-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="#" className="form-control form-control-custom" placeholder="Email I'd" required />
                                        </div>
                                        <button type="submit" className="btn-first btn-submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </footer >
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-custom-white">© Website - 2022 | All Right Reserved. <a href="#" className="text-custom-white">Designed By Website</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="back-top" className="back-top"
            //  [ngClass] = "windowScrolled ? 'd-block':''" 
            >
                <a href="#"><i className="flaticon-arrows"></i></a>
            </div >
        </>
    )
}

export default Footer