import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
        <>
        <footer className="s-footer">
            <div className="s-footer__main">

                <div className="row">
                    
                    <div className="col-two md-four mob-full s-footer__sitelinks">
                            
                        <h4>Quick Links</h4>
    
                        <ul className="s-footer__linklist">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/policy">Privacy Policy</Link></li>
                        </ul>
    
                    </div>
    
                    <div className="col-two md-four mob-full s-footer__archives">
                            
                        <h4>Archives</h4>
    
                        <ul className="s-footer__linklist">
                            <li><a href="/">January 2018</a></li>
                            <li><a href="/">December 2017</a></li>
                            <li><a href="/">November 2017</a></li>
                            <li><a href="/">October 2017</a></li>
                            <li><a href="/">September 2017</a></li>
                            <li><a href="/">August 2017</a></li>
                        </ul>
    
                    </div>
    
                    <div className="col-two md-four mob-full s-footer__social">
                            
                        <h4>Social</h4>
    
                        <ul className="s-footer__linklist">
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Pinterest</a></li>
                            <li><a href="/">Google+</a></li>
                            <li><a href="/">LinkedIn</a></li>
                        </ul>
    
                    </div>
    
                    <div className="col-five md-full end s-footer__subscribe">
                            
                        <h4>Our Newsletter</h4>
    
                        <p>Subscribe for latest updates.</p>
    
                        <div className="subscribe-form">
                            <form id="mc-form" className="group" noValidate={true}>
    
                                <input type="email" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required=""/>
                    
                                <input type="submit" name="subscribe"/>
                    
                                <label htmlFor="mc-email" className="subscribe-message"></label>
                    
                            </form>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <div className="s-footer__bottom">
                <div className="row">
                    <div className="col-full">
                        <div className="s-footer__copyright">
                            <span>© Copyright CoffeeCodes 2022</span> 
                            <span>Site Template Credits to <a href="https://colorlib.com/">Colorlib</a> and <a href="https://themeslab.org/" target="_blank" rel="noreferrer">Themeslab</a></span>
                        </div>
    
                        <div className="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top">.</a>
                        </div>
                    </div>
                </div>
            </div>
    
        </footer>
        < Outlet />
        </>    
    )
  }
}
