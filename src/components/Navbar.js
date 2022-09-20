import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
//import Button from '@mui/material/Button';
//import Paper from '@mui/material/Paper';

export default class Navbar extends Component {
  /*
    constructor(props) {
        super(props);
        this.state = {
            menu: "close"
        };
      }
*/
  render() {
    return (
      <>
        <div className="header__toggle-menu" onClick={this.props.toggleMenu}>
          <span>Menu</span>
        </div>
        <nav className="header__nav-wrap">
          <h2 className="header__nav-heading h6">Site Navigation</h2>
          <ul className="header__nav">
            <li className={this.props.current === "home" ? "current" : "mx-1"}>
              <Link to="/" title="">
                Home
              </Link>
            </li>
            <li
              className={
                this.props.current === "category"
                  ? "current has-children"
                  : "mx-1"
              }
            >
              <a href="/" title="">
                Categories
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="category.html">Lifestyle</a>
                </li>
                <li>
                  <a href="category.html">Health</a>
                </li>
                <li>
                  <a href="category.html">Family</a>
                </li>
                <li>
                  <a href="category.html">Management</a>
                </li>
                <li>
                  <a href="category.html">Travel</a>
                </li>
                <li>
                  <a href="category.html">Work</a>
                </li>
              </ul>
            </li>
            <li
              className={
                this.props.current === "blog" ? "current has-children" : "mx-1"
              }
            >
              <a href="/" title="">
                Blog
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="/blogs/technology">Technology</Link>
                </li>
                <li>
                  <Link to="/blogs/web_dev">Web Development</Link>
                </li>
                <li>
                  <Link to="/blogs/app_dev">App Development</Link>
                </li>
                <li>
                  <Link to="/blogs/hacking">Hacking</Link>
                </li>
              </ul>
            </li>
            <li className={this.props.current === "about" ? "current" : "mx-1"}>
              <a href="about.html" title="">
                About
              </a>
            </li>
            <li
              className={this.props.current === "contact" ? "current" : "mx-1"}
            >
              <Link to="/contact" title="">
                Contact
              </Link>
            </li>
          </ul>{" "}
          {/*<!-- end header__nav -->*/}
          <a
            href="/"
            title="Close Menu"
            className="header__overlay-close close-mobile-menu"
          >
            Close
          </a>
        </nav>{" "}
        {/*<!-- end header__nav-wrap -->*/}
        <Outlet />
      </>
    );
  }
}
