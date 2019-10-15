import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <div>
               <section className="bg-gray section-padding">
                    <div className="container">
                        <div className="section-intro pb-5 mb-xl-2 text-center">
                        <h2 className="mb-4">Subscribe To Get Our Newsletter</h2>
                        <p>Man greater image shall land air winged place seas replenish whose winged great fifth fruitful. Set days sea over morning.</p>
                        </div>

                        <form className="form-subscribe" action="#">
                        <div className="input-group align-items-center">
                            <input type="text" className="form-control" placeholder="Enter Your email" required />
                            <div className="input-group-append">
                            <button className="button button-shadow2" type="submit">Subscribe</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </section> 
            </div>
        )
    }
}
