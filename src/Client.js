import React, { Component } from 'react'

export default class Client extends Component {
    render() {
        return (
            <div>
               <section className="section-margin">
                    <div className="container">
                        <div className="text-center">
                        <h3 className="client-logo-title">Trusted by 12,0000+ happy customer worldwide</h3>
                        </div>
                        <div className="owl-carousel owl-theme logo-carousel">
                        <div className="logo-carousel-item">
                            <img className="img-fluid" src="img/home/brand-logo1.png" alt="" />
                        </div>
                        <div className="logo-carousel-item">
                            <img className="img-fluid" src="img/home/brand-logo2.png" alt="" />
                        </div>
                        <div className="logo-carousel-item">
                            <img className="img-fluid" src="img/home/brand-logo3.png" alt="" />
                        </div>
                        <div className="logo-carousel-item">
                            <img className="img-fluid" src="img/home/brand-logo4.png" alt="" />
                        </div>
                        <div className="logo-carousel-item">
                            <img className="img-fluid" src="img/home/brand-logo5.png" alt="" />
                        </div>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}
