import React, { Component } from 'react';
import Testimonial from './Testimonial';
import Footer from './Footer';
import {Link} from 'react-router-dom';

export default class ServiceInner extends Component {
    render() {
        return (
            <div>
                <section className="hero-banner hero-banner-sm text-center">
                    <div className="container">
                    <h1>Our Services</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                    </div>
                </section>
                <section className="section-margin mb-5">
                    <div className="container">
                        <div className="section-intro pb-85px text-center">
                        <h2>Hight Quality Service</h2>
                        <div className="section-style"></div>
                        </div>

                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="card-service text-center">
                            <div className="service-icon">
                                <img src="img/home/png/006-server.png" alt="" />
                            </div>
                            <h3>SSD Cloud Hosting</h3>
                            <p>Man greater image shall land air winged replenish whose winged great fifth fruitful Set days sealand over great  </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="card-service text-center">
                            <div className="service-icon">
                                <img src="img/home/png/004-home-page.png" alt="" />
                            </div>
                            <h3>Free Domain Transfer</h3>
                            <p>Man greater image shall land air winged replenish whose winged great fifth fruitful Set days sealand over great  </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="card-service text-center">
                            <div className="service-icon">
                                <img src="img/home/png/007-server-1.png" alt="" />
                            </div>
                            <h3>Best Hosting Service</h3>
                            <p>Man greater image shall land air winged replenish whose winged great fifth fruitful Set days sealand over great  </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="card-service text-center">
                            <div className="service-icon">
                                <img src="img/home/png/002-shield.png" alt="" />
                            </div>
                            <h3>Strong Backup</h3>
                            <p>Man greater image shall land air winged replenish whose winged great fifth fruitful Set days sealand over great  </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="card-service text-center">
                            <div className="service-icon">
                                <img src="img/home/png/008-mail.png" alt="" />
                            </div>
                            <h3>Email Service</h3>
                            <p>Man greater image shall land air winged replenish whose winged great fifth fruitful Set days sealand over great  </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="card-service text-center">
                            <div className="service-icon">
                                <img src="img/home/png/009-art.png" alt="" />
                            </div>
                            <h3>Data Analysis</h3>
                            <p>Man greater image shall land air winged replenish whose winged great fifth fruitful Set days sealand over great  </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section> 
                <Testimonial/>
                <Footer/>
            </div>
        )
    }
}
