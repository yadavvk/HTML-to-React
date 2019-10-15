import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area section-gap">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>About Us</h4>
                            <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Contact Info</h4>
                            <ul>
                            <li>Address: Your address goes here, your demo address.</li>
                            <li><a href="tel:+88044338899">Phone: +880 44338899</a></li>
                            <li><a href="mailto:info@colorlib.com">Email: info@abc.com</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Important Link</h4>
                            <ul>
                            <li><a href="#">WHMCS-bridge</a></li>
                            <li><a href="#">Search Domain</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Our Shop</a></li>
                            </ul>
                        </div>
                        <div className="offset-xl-1 col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Newsletter</h4>
                            <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open</p>
                            
                            <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank" action="#"
                            method="get">
                                <div className="input-group">
                                <input type="email" className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" />
                                <div className="input-group-append">
                                    <button className="btn click-btn" type="submit">
                                    <i className="ti-arrow-right"></i>
                                    </button>
                                </div>
                                </div>
                                <div style={{position: "absolute", left: -5000}}>
                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                </div>

                                <div className="info"></div>
                            </form>
                            </div>
                            
                        </div>
                        </div>
                        <div className="footer-bottom row align-items-center text-center text-lg-left">
                        <p className="footer-text m-0 col-lg-8 col-md-12">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Demo</a></p>
                        <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                            <a href="#"><i className="ti-facebook"></i></a>
                            <a href="#"><i className="ti-twitter-alt"></i></a>
                            <a href="#"><i className="ti-dribbble"></i></a>
                            <a href="#"><i className="ti-linkedin"></i></a>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
