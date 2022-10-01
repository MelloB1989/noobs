import React, { Component } from 'react'
import Footer from './Footer'
import PageHeader from './PageHeader'

export default class Contact extends Component {
  render() {
    return (
        <>
        <PageHeader css="s-pageheader" current="contact"/>
    
        <section className="s-content s-content--narrow">

        <div className="row">

            <div className="s-content__header col-full">
                <h1 className="s-content__header-title">
                    Feel Free To Contact MelloB.
                </h1>
            </div>
    
            <div className="s-content__media col-full">
                <div id="map-wrap">
                    <div id="map-container"></div>
                    <div id="map-zoom-in"></div>
                    <div id="map-zoom-out"></div>
                </div> 
            </div>

            <div className="col-full s-content__main">

                <p className="lead">Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>
                
                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>

                <div className="row">
                    <div className="col-six tab-full">
                        <h3>Where to Find Us</h3>

                        <p>
                        1600 Amphitheatre Parkway
                        Mountain View, CA
                        94043 US
                        </p>

                    </div>

                    <div className="col-six tab-full">
                        <h3>Contact Info</h3>

                        <p>contact@philosophywebsite.com
                        info@philosophywebsite.com
                        Phone: (+1) 123 456
                        </p>

                    </div>
                </div>

                <h3>Say Hello.</h3>

                <form name="cForm" id="cForm" method="post" action="">
                    <fieldset>

                        <div className="form-field">
                            <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name"/>
                        </div>

                        <div className="form-field">
                            <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email"/>
                        </div>

                        <div className="form-field">
                            <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website"/>
                        </div>

                        <div className="message form-field">
                        <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" ></textarea>
                        </div>

                        <button type="submit" className="submit btn btn--primary full-width">Submit</button>

                    </fieldset>
                </form>


            </div>

        </div>

    </section> 


    <section className="s-extra">

        <div className="row top">

            <div className="col-eight md-six tab-full popular">
                <h3>Popular Posts</h3>

                <div className="block-1-2 block-m-full popular__posts">
                    <article className="col-block popular__post">
                        <a href="/" className="popular__thumb">
                            <img src="images/thumbs/small/wheel-150.jpg" alt=""/>
                        </a>
                        <h5><a href="/">Visiting Theme Parks Improves Your Health.</a></h5>
                        <section className="popular__meta">
                                <span className="popular__author"><span>By</span> <a href="/"> John Doe</a></span>
                            <span className="popular__date"><span>on</span> <time dateTime="2017-12-19">Dec 19, 2017</time></span>
                        </section>
                    </article>
                    <article className="col-block popular__post">
                        <a href="/" className="popular__thumb">
                            <img src="images/thumbs/small/shutterbug-150.jpg" alt=""/>
                        </a>
                        <h5><a href="/">Key Benefits Of Family Photography.</a></h5>
                        <section className="popular__meta">
                            <span className="popular__author"><span>By</span> <a href="/"> John Doe</a></span>
                            <span className="popular__date"><span>on</span> <time dateTime="2017-12-18">Dec 18, 2017</time></span>
                        </section>
                    </article>
                    <article className="col-block popular__post">
                        <a href="/" className="popular__thumb">
                            <img src="images/thumbs/small/cookies-150.jpg" alt=""/>
                        </a>
                        <h5><a href="/">Absolutely No Sugar Oatmeal Cookies.</a></h5>
                        <section className="popular__meta">
                                <span className="popular__author"><span>By</span> <a href="/"> John Doe</a></span>
                            <span className="popular__date"><span>on</span> <time dateTime="2017-12-16">Dec 16, 2017</time></span>
                        </section>
                    </article>
                    <article className="col-block popular__post">
                        <a href="/" className="popular__thumb">
                            <img src="images/thumbs/small/beetle-150.jpg" alt=""/>
                        </a>
                        <h5><a href="/">Throwback To The Good Old Days.</a></h5>
                        <section className="popular__meta">
                            <span className="popular__author"><span>By</span> <a href="/"> John Doe</a></span>
                            <span className="popular__date"><span>on</span> <time dateTime="2017-12-16">Dec 16, 2017</time></span>
                        </section>
                    </article>
                    <article className="col-block popular__post">
                        <a href="/" className="popular__thumb">
                            <img src="images/thumbs/small/tulips-150.jpg" alt=""/>
                        </a>
                        <h5><a href="/">10 Interesting Facts About Caffeine.</a></h5>
                        <section className="popular__meta">
                            <span className="popular__author"><span>By</span> <a href="/"> John Doe</a></span>
                            <span className="popular__date"><span>on</span> <time dateTime="2017-12-14">Dec 14, 2017</time></span>
                        </section>
                    </article>
                    <article className="col-block popular__post">
                        <a href="/" className="popular__thumb">
                            <img src="images/thumbs/small/salad-150.jpg" alt=""/>
                        </a>
                        <h5><a href="/">Healthy Mediterranean Salad Recipes</a></h5>
                        <section className="popular__meta">
                            <span className="popular__author"><span>By</span> <a href="/"> John Doe</a></span>
                            <span className="popular__date"><span>on</span> <time dateTime="2017-12-12">Dec 12, 2017</time></span>
                        </section>
                    </article>
                </div>
            </div>
            
            <div className="col-four md-six tab-full about">
                <h3>About Philosophy</h3>

                <p>
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                </p>

                <ul className="about__social">
                    <li>
                        <a href="/"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="/"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="/"><i className="fa fa-pinterest"></i></a>
                    </li>
                </ul>
            </div>

        </div>

        <div className="row bottom tags-wrap">
            <div className="col-full tags">
                <h3>Tags</h3>

                <div className="tagcloud">
                    <a href="/">Salad</a>
                    <a href="/">Recipe</a>
                    <a href="/">Places</a>
                    <a href="/">Tips</a>
                    <a href="/">Friends</a>
                    <a href="/">Travel</a>
                    <a href="/">Exercise</a>
                    <a href="/">Reading</a>
                    <a href="/">Running</a>
                    <a href="/">Self-Help</a>
                    <a href="/">Vacation</a>
                </div>
            </div>
        </div>

    </section>
    <Footer />
      </>
    )
  }
}
