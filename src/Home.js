import React, { Component } from 'react';
import Banner from './Banner';
import Domain from './Domain';
import Client from './Client';
import Feature from './Feature';
import Price from './Price';
import Service from './Service';
import Subscribe from './Subscribe';
import Dedicated from './Dedicated';
import Testimonial from './Testimonial';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Domain/>
                <Client/>
                <Feature/>
                <Price/>
                <Service/>
                <Subscribe/>
                <Dedicated/>
                <Testimonial/>
                <Footer/>
            </div>
        )
    }
}
