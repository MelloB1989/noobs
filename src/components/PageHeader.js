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
                            <img src="https://d2t7e9wkmid4yu.cloudfront.net/noobs/images/logo.gif" alt="Homepage" height="150px"/>
                        </a>
                    </div> {/*<!-- end header__logo -->*/}
    
                    <ul className="header__social">
                        <li>
                            <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/MelloB1989"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/MelloB1989"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                        </li>
                    </ul> {/*<!-- end header__social -->*/}
    
                    <a className="header__search-trigger" href="#0"></a>
    
                    <div className="header__search">
    
                        <form role="search" className="header__search-form">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autoComplete="off"/>
                            </label>
                            <input type="submit" className="search-submit" value="Search"/>
                        </form>
            
                        <a href="#0" title="Close Search" className="header__overlay-close">Close</a>
    
                    </div>  {/*<!-- end header__search -->*/}
    
    
                    <a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>
    
                    <nav className="header__nav-wrap">
    
                        <h2 className="header__nav-heading h6">Site Navigation</h2>
    
                        <ul className="header__nav">
                            <li className="current"><a href="index.html" title="">Home</a></li>
                            <li className="has-children">
                                <a href="#0" title="">Categories</a>
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
                                <a href="#0" title="">Blog</a>
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
    
                        <a href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</a>
    
                    </nav> {/*<!-- end header__nav-wrap -->*/}
    
                </div> {/*<!-- header-content -->*/}
            </header> {/*<!-- header -->*/}
    
    
            <div className="pageheader-content row">
                <div className="col-full">
    
                    <div className="featured">
    
                        <div className="featured__column featured__column--big">
                            <div className="entry" style={{"background-image": "https://d2t7e9wkmid4yu.cloudfront.net/noobs/images/thumbs/featured/featured-guitarman.jpg"}}>
                                
                                <div className="entry__content">
                                    <span className="entry__category"><a href="#0">Music</a></span>
    
                                    <h1><a href="#0" title="">What Your Music Preference Says About You and Your Personality.</a></h1>
    
                                    <div className="entry__info">
                                        <a href="#0" className="entry__profile-pic">
                                            <img className="avatar" src="images/avatars/user-03.jpg" alt=""/>
                                        </a>
    
                                        <ul className="entry__meta">
                                            <li><a href="#0">John Doe</a></li>
                                            <li>December 29, 2017</li>
                                        </ul>
                                    </div>
                                </div> {/*<!-- end entry__content -->*/}
                                
                            </div> {/*<!-- end entry -->*/}
                        </div> {/*<!-- end featured__big -->*/}
    
                        <div className="featured__column featured__column--small">
    
                            <div className="entry" style={{"background-image": 'https://d2t7e9wkmid4yu.cloudfront.net/noobs/images/thumbs/featured/featured-watch.jpg'}}>
                                
                                <div className="entry__content">
                                    <span className="entry__category"><a href="#0">Management</a></span>
    
                                    <h1><a href="#0" title="">The Pomodoro Technique Really Works.</a></h1>
    
                                    <div className="entry__info">
                                        <a href="#0" className="entry__profile-pic">
                                            <img className="avatar" src="images/avatars/user-03.jpg" alt=""/>
                                        </a>
    
                                        <ul className="entry__meta">
                                            <li><a href="#0">John Doe</a></li>
                                            <li>December 27, 2017</li>
                                        </ul>
                                    </div>
                                </div> {/*<!-- end entry__content -->*/}
                              
                            </div> {/*<!-- end entry -->*/}
    
                            <div className="entry" style={{"background-image" : 'https://d2t7e9wkmid4yu.cloudfront.net/noobs/images/thumbs/featured/featured-beetle.jpg'}}>
    
                                <div className="entry__content">
                                    <span className="entry__category"><a href="#0">LifeStyle</a></span>
    
                                    <h1><a href="#0" title="">Throwback To The Good Old Days.</a></h1>
    
                                    <div className="entry__info">
                                        <a href="#0" className="entry__profile-pic">
                                            <img className="avatar" src="images/avatars/user-03.jpg" alt=""/>
                                        </a>
    
                                        <ul className="entry__meta">
                                            <li><a href="#0">John Doe</a></li>
                                            <li>December 21, 2017</li>
                                        </ul>
                                    </div>
                                </div> {/*<!-- end entry__content -->*/}
    
                            </div> {/*<!-- end entry -->*/}
    
                        </div> {/*<!-- end featured__small -->*/}
                    </div> {/*<!-- end featured -->*/}
    
                </div> {/*<!-- end col-full -->*/}
            </div> {/*<!-- end pageheader-content row -->*/}
    
        </section> {/*<!-- end s-pageheader -->*/}
        </>
    )
  }
}
