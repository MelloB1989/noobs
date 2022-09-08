import React, { Component } from 'react'
import Featured from './Featured'
import Navbar from './Navbar'

export default class PageHeader extends Component {
  render() {
    return (
        <>
        <section className={this.props.css}>
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
                            <a href="https://twitter.com/MelloB1989" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/MelloB1989" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
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
                                <input type="search" onChange={this.props.search} className="search-field" placeholder="Type Keywords" name="s" title="Search for:" autoComplete="off"/>
                            </label>
                            <button type="submit" className="search-submit" value="Search"></button>
                        </form>
            
                        <a href="/" title="Close Search" className="header__overlay-close">Close</a>
    
                    </div>  {/*<!-- end header__search -->*/}
    
                <Navbar current={this.props.current}/>
    
                </div> {/*<!-- header-content -->*/}
            </header> {/*<!-- header -->*/}
            {this.props.featured ? (<Featured/>) : (<div/>)}
        </section> {/*<!-- end s-pageheader -->*/}
        </>
    )
  }
}
