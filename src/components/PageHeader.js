import React, { Component } from 'react'
import Featured from './Featured'
import Navbar from './Navbar'
import Breadcrumbs from '@mui/material/Breadcrumbs';
//import Link from '@mui/material/Link';
import { Outlet, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
//import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import BookIcon from '@mui/icons-material/Book';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';


export default class PageHeader extends Component {
  render() {
    return (
      <>
        {this.props.menu === "open" ? (
          <>
            <section className={this.props.css}>
              <header className="header">
                <div className="header__content row">
                  <div className="header__logo">
                    <a className="logo" href="/">
                      <img
                        src="https://s3.ap-south-1.amazonaws.com/cdn.socify.co.in/noobs/images/logo.gif"
                        alt="Homepage"
                        height="150px"
                      />
                    </a>
                  </div>
                  <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="white"
                        to="/"
                      >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="large" />
                        Home
                      </Link>
                      <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="white"
                        to="/categories"
                      >
                        <CategoryIcon sx={{ mr: 0.5 }} fontSize="large" />
                        Categories
                      </Link>
                      <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="white"
                        to="/blogs/technology"
                      >
                        <BookIcon sx={{ mr: 0.5 }} fontSize="large" />
                        Blogs
                      </Link>
                      <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="white"
                        to="/about"
                      >
                        <InfoIcon sx={{ mr: 0.5 }} fontSize="large" />
                        About
                      </Link>
                      <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="white"
                        to="/contact"
                      >
                        <ConnectWithoutContactIcon
                          sx={{ mr: 0.5 }}
                          fontSize="large"
                        />
                        Contact
                      </Link>
                      <div
                        color="white"
                        backgroundColor="white"
                        onClick={this.props.toggleMenu}
                      >
                        <CloseIcon sx={{ mr: 0.5 }} fontSize="large" />
                        Close
                      </div>
                    </Breadcrumbs>
                  </div>
                </div>
              </header>
            </section>
            <Outlet />
          </>
        ) : (
          <section className={this.props.css}>
            <header className="header">
              <div className="header__content row">
                <div className="header__logo">
                  <a className="logo" href="/">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/cdn.socify.co.in/noobs/images/logo.gif"
                      alt="Homepage"
                      height="150px"
                    />
                  </a>
                </div>{" "}
                {/*<!-- end header__logo -->*/}
                <ul className="header__social">
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/MelloB1989"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/MelloB1989"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>{" "}
                {/*<!-- end header__social -->*/}
                <a className="header__search-trigger" href="/">
                  .
                </a>
                <div className="header__search">
                  <form role="search" className="header__search-form">
                    <label>
                      <span className="hide-content">Search for:</span>
                      <input
                        type="search"
                        onChange={this.props.search}
                        className="search-field"
                        placeholder="Type Keywords"
                        name="s"
                        title="Search for:"
                        autoComplete="off"
                      />
                    </label>
                    <button
                      type="submit"
                      className="search-submit"
                      value="Search"
                    ></button>
                  </form>

                  <a
                    href="/"
                    title="Close Search"
                    className="header__overlay-close"
                  >
                    Close
                  </a>
                </div>{" "}
                {/*<!-- end header__search -->*/}
                <Navbar
                  current={this.props.current}
                  toggleMenu={this.props.toggleMenu}
                />
              </div>{" "}
              {/*<!-- header-content -->*/}
            </header>{" "}
            {/*<!-- header -->*/}
            {this.props.featured ? <Featured featured_blogs={this.props.featured_blogs} /> : <div />}
          </section>
        )}
      </>
    );
  }
}
