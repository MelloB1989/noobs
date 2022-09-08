import React, { Component } from 'react'

export default class PageHeader extends Component {
  render() {
    return (
        <>
        <section className="s-pageheader s-pageheader--home">
            <header className="header">
                <div className="header__content row">
    
                    <div className="header__logo">
                        <a className="logo" href="index.html">
                            <img src="https://s3.ap-south-1.amazonaws.com/cdn.socify.co.in/noobs/images/logo.gif" alt="Homepage" height="150px"/>
                        </a>
                    </div> {/*<!-- end header__logo -->*/}
    
                    <ul className="header__social">
                        <li>
                            <a href="/"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/MelloB1989"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/MelloB1989"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-pinterest"></i></a>
                        </li>
                    </ul> {/*<!-- end header__social -->*/}
    
                    <a className="header__search-trigger" href="/">.</a>
    
                    <div className="header__search">
    
                        <form role="search" className="header__search-form">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" onChange={this.props.search} className="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autoComplete="off"/>
                            </label>
                            <button type="submit" className="search-submit" value="Search"></button>
                        </form>
            
                        <a href="/" title="Close Search" className="header__overlay-close">Close</a>
    
                    </div>  {/*<!-- end header__search -->*/}
    
    
                    <a className="header__toggle-menu" href="/" title="Menu"><span>Menu</span></a>
    
                    <nav className="header__nav-wrap">
    
                        <h2 className="header__nav-heading h6">Site Navigation</h2>
    
                        <ul className="header__nav">
                            <li className="current"><a href="index.html" title="">Home</a></li>
                            <li className="has-children">
                                <a href="/" title="">Categories</a>
                                <ul className="sub-menu">
                                <li><a href="category.html">Lifestyle</a></li>
                                <li><a href="category.html">Health</a></li>
                                <li><a href="category.html">Family</a></li>
                                <li><a href="category.html">Management</a></li>
                                <li><a href="category.html">Travel</a></li>
                                <li><a href="category.html">Work</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="/" title="">Blog</a>
                                <ul className="sub-menu">
                                <li><a href="single-video.html">Video Post</a></li>
                                <li><a href="single-audio.html">Audio Post</a></li>
                                <li><a href="single-gallery.html">Gallery Post</a></li>
                                <li><a href="single-standard.html">Standard Post</a></li>
                                </ul>
                            </li>
                            <li><a href="style-guide.html" title="">Styles</a></li>
                            <li><a href="about.html" title="">About</a></li>
                            <li><a href="contact.html" title="">Contact</a></li>
                        </ul> {/*<!-- end header__nav -->*/}
    
                        <a href="/" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</a>
    
                    </nav> {/*<!-- end header__nav-wrap -->*/}
    
                </div> {/*<!-- header-content -->*/}
            </header> {/*<!-- header -->*/}
        </section> {/*<!-- end s-pageheader -->*/}
        </>
    )
  }
}
