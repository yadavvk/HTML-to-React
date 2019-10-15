import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header_area">
                    <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container box_1620">
                        <Link className="navbar-brand logo_h" to="/"><h2 style={{color:"white"}}>Demo</h2></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav justify-content-end">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="/feature1">Features</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="/service1">Service</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/pricing1">Pricing</Link></li>
                            <li className="nav-item submenu dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">Pages</Link>
                                <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="nav-link" to="/blog">Single Blog</Link> </li>                
                                <li className="nav-item"><Link className="nav-link" to="/blog-details">Blog Details</Link></li>            
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>

                            <div className="nav-right text-center text-lg-right py-4 py-lg-0">
                            <Link className="button button-link mr-4" to="/contact"><span className="align-middle"><i className="ti-comments"></i></span> Live Chat</Link>
                            <Link className="button button-outline button-small" to="/contact">Login</Link>
                            </div>
                        </div> 
                        </div>
                    </nav>
                    </div>
                </header>
            </div>
        )
    }
}

