import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <section className="hero-banner hero-banner-sm text-center">
                    <div className="container">
                    <h1>Latest Story</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                    </div>
                </section>
                <section className="blog_area section-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="blog_left_sidebar">
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-1.jpg" alt="" />
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                        </div>
                                        
                                        <div style={{textAlign:"left"}} className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                            <li><Link to="#"><i className="ti-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="#"><i className="ti-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-2.jpg" alt=""/>
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                        </div>
                                        
                                        <div style={{textAlign:"left"}} className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                            <li><Link to="#"><i className="ti-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="#"><i className="ti-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-3.jpg" alt=""/>
                                        <Link href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                        </div>
                                        
                                        <div style={{textAlign:"left"}} className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                            <li><Link to="#"><i className="ti-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="#"><i className="ti-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-4.jpg" alt=""/>
                                        <Link href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                        </div>
                                        
                                        <div style={{textAlign:"left"}} className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                            <li><Link to="#"><i className="ti-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="#"><i className="ti-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-5.jpg" alt=""/>
                                        <Link to="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </Link>
                                        </div>
                                        
                                        <div style={{textAlign:"left"}} className="blog_details">
                                            <a className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </a>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                            <li><Link to="#"><i className="ti-user"></i> Travel, Lifestyle</Link></li>
                                            <li><Link to="#"><i className="ti-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    


                                    <nav className="blog-pagination justify-content-center d-flex">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Previous">
                                                    <span aria-hidden="true">
                                                        <span className="ti-arrow-left"></span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="#" className="page-link">1</Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link to="#" className="page-link">2</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Next">
                                                    <span aria-hidden="true">
                                                        <span className="ti-arrow-right"></span>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div className="form-group">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Search Keyword"/>
                                                <div className="input-group-append">
                                                <button className="btn" type="button"><i className="ti-search"></i></button>
                                                </div>
                                            </div>
                                            </div>
                                            <button className="button rounded-0 w-100" type="submit">Search</button>
                                        </form>
                                    </aside>

                                    <aside style={{textAlign:"left"}} className="single_sidebar_widget post_category_widget">
                                        <h4 className="widget_title">Category</h4>
                                        <ul className="list cat-list">
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Resaurant food</p>
                                                    <p>(37)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Travel news</p>
                                                    <p>(10)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Modern technology</p>
                                                    <p>(03)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Product</p>
                                                    <p>(11)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Inspiration</p>
                                                    <p>21</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Health Care (21)</p>
                                                    <p>09</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>

                                    <aside style={{textAlign:"left"}} className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="img/blog/popular-post/post1.jpg" alt="post"/>
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>From life was you fish...</h3>
                                                </Link>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="img/blog/popular-post/post2.jpg" alt="post"/>                              
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>The Amazing Hubble</h3>
                                                </Link>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="img/blog/popular-post/post3.jpg" alt="post"/>                              
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>Astronomy Or Astrology</h3>
                                                </Link>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="img/blog/popular-post/post4.jpg" alt="post"/>
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>Asteroids telescope</h3>
                                                </Link>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside style={{textAlign:"left"}} className="single_sidebar_widget tag_cloud_widget">
                                        <h4 className="widget_title">Tag Clouds</h4>
                                        <ul className="list">
                                            <li>
                                            <Link to="#">project</Link>
                                            </li>
                                            <li>
                                             <Link to="#">love</Link>
                                            </li>
                                            <li>
                                            <Link to="#">technology</Link>
                                            </li>
                                            <li>
                                            <Link to="#">travel</Link>
                                            </li>
                                            <li>
                                            <Link to="#">restaurant</Link>
                                            </li>
                                            <li>
                                            <Link to="#">life style</Link>
                                            </li>
                                            <li>
                                            <Link to="#">design</Link>
                                            </li>
                                            <li>
                                            <Link to="#">illustration</Link>
                                            </li>
                                        </ul>
                                    </aside>


                                    <aside style={{textAlign:"left"}} className="single_sidebar_widget instagram_feeds">
                                        <h4 className="widget_title">Instagram Feeds</h4>
                                        <ul className="instagram_row flex-wrap">
                                            <li>
                                                <Link to="#">
                                                <img className="img-fluid" src="img/instagram/widget-i1.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <img className="img-fluid" src="img/instagram/widget-i2.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <img className="img-fluid" src="img/instagram/widget-i3.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <img className="img-fluid" src="img/instagram/widget-i4.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <img className="img-fluid" src="img/instagram/widget-i5.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <img className="img-fluid" src="img/instagram/widget-i6.png" alt=""/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>


                                    <aside style={{textAlign:"left"}} className="single_sidebar_widget newsletter_widget">
                                        <h4 className="widget_title">Newsletter</h4>

                                        <form action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Enter email" required />
                                        </div>
                                        <button className="button rounded-0 w-100" type="submit">Subscribe</button>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
