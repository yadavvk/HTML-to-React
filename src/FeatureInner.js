import React, { Component } from 'react';
import Feature from './Feature';
import Testimonial from './Testimonial';
import Footer from './Footer';
import {Link} from 'react-router-dom';

export default class FeatureInner extends Component {
    render() {
        return (
            <div>
                 <section className="hero-banner hero-banner-sm text-center">
                    <div className="container">
                    <h1>Our Features</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Our Features</li>
                        </ol>
                    </nav>
                    </div>
                </section>
                <Feature/>
                <Testimonial/>
                <Footer/>
            </div>
        )
    }
}
