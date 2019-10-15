import React, { Component } from 'react';
import Subscribe from './Subscribe';
import Dedicated from './Dedicated';
import Footer from './Footer';
import {Link} from 'react-router-dom';

export default class PriceInner extends Component {
    render() {
        return (
            <div>
                <section className="hero-banner hero-banner-sm text-center">
                    <div className="container">
                    <h1>Pricing Plan</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                        </ol>
                    </nav>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container">
                    <div className="pb-85px text-center">
                        <h2>Popular Pricing Package</h2>
                        <div className="section-style"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="card text-center card-pricing">
                            <div className="card-pricing__header">
                            <h4>Normal</h4>
                            <p>Attend only first day</p>
                            <h1 className="card-pricing__price"><span>$</span>45.80</h1>
                            </div>
                            <ul className="card-pricing__list">
                            <li>Unlimited of Website</li>
                            <li>Unlimited Disk Space</li>
                            <li>Unlimited Bandwidth</li>
                            <li>24/7/365 Support</li>
                            <li>Unlimited Email Accounts</li>
                            <li>99.9% Service Uptime</li>
                            </ul>
                            <div className="card-pricing__footer">
                            <button className="button">Select Plan</button>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="card text-center card-pricing">
                            <div className="card-pricing__header">
                            <h4>Premium</h4>
                            <p>Attend only first day</p>
                            <h1 className="card-pricing__price"><span>$</span>65.80</h1>
                            </div>
                            <ul className="card-pricing__list">
                            <li>Unlimited of Website</li>
                            <li>Unlimited Disk Space</li>
                            <li>Unlimited Bandwidth</li>
                            <li>24/7/365 Support</li>
                            <li>Unlimited Email Accounts</li>
                            <li>99.9% Service Uptime</li>
                            </ul>
                            <div className="card-pricing__footer">
                            <button className="button">Select Plan</button>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="card text-center card-pricing">
                            <div className="card-pricing__header">
                            <h4>Ultimate</h4>
                            <p>Attend only first day</p>
                            <h1 className="card-pricing__price"><span>$</span>75.80</h1>
                            </div>
                            <ul className="card-pricing__list">
                            <li>Unlimited of Website</li>
                            <li>Unlimited Disk Space</li>
                            <li>Unlimited Bandwidth</li>
                            <li>24/7/365 Support</li>
                            <li>Unlimited Email Accounts</li>
                            <li>99.9% Service Uptime</li>
                            </ul>
                            <div className="card-pricing__footer">
                            <button className="button">Select Plan</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <Subscribe/>
                <Dedicated/>
                <Footer/>
            </div>
        )
    }
}
