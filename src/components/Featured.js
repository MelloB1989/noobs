import React, { Component } from 'react'
import {Outlet, Link} from 'react-router-dom'

export default class Featured extends Component {
  render() {
    return (
        <>
        <div className="pageheader-content row">
        <div className="col-full">

            <div className="featured">

                <div className="featured__column featured__column--big">
                    <div className="entry" style={{"backgroundImage" : `url(${this.props.featured_blogs.one_img})`}}>
                        
                        <div className="entry__content">
                            <span className="entry__category"><Link to={this.props.featured_blogs.one}>{this.props.featured_blogs.one_cat}</Link></span>

                            <h1><a href="#0" title="">{this.props.featured_blogs.one_title}</a></h1>

                            <div className="entry__info">
                                <a href="#0" className="entry__profile-pic">
                                    <img className="avatar" src={this.props.featured_blogs.one_authimg} alt=""/>
                                </a>

                                <ul className="entry__meta">
                                    <li><a href="#0">{this.props.featured_blogs.one_author}</a></li>
                                    <li>{this.props.featured_blogs.one_date}</li>
                                </ul>
                            </div>
                        </div> {/*-- end entry__content */}
                        
                    </div> {/*-- end entry */}
                </div> {/*-- end featured__big */}

                <div className="featured__column featured__column--small">

                    <div className="entry" style={{backgroundImage : `url(${this.props.featured_blogs.two_img})`}}>
                        
                        <div className="entry__content">
                            <span className="entry__category"><Link to={this.props.featured_blogs.two}>{this.props.featured_blogs.two_cat}</Link></span>

                            <h1><a href="#0" title="">{this.props.featured_blogs.two_title}</a></h1>

                            <div className="entry__info">
                                <a href="#0" className="entry__profile-pic">
                                    <img className="avatar" src={this.props.featured_blogs.two_authimg} alt=""/>
                                </a>

                                <ul className="entry__meta">
                                    <li><a href="#0">{this.props.featured_blogs.two_author}</a></li>
                                    <li>{this.props.featured_blogs.two_date}</li>
                                </ul>
                            </div>
                        </div> {/*-- end entry__content */}
                      
                    </div> {/*-- end entry */}

                    <div className="entry" style={{backgroundImage : `url(${this.props.featured_blogs.th_img})`}}>

                        <div className="entry__content">
                            <span className="entry__category"><Link to={this.props.featured_blogs.th}>{this.props.featured_blogs.th_cat}</Link></span>

                            <h1><a href="#0" title="">{this.props.featured_blogs.th_title}</a></h1>

                            <div className="entry__info">
                                <a href="#0" className="entry__profile-pic">
                                    <img className="avatar" src={this.props.featured_blogs.th_authimg} alt=""/>
                                </a>

                                <ul className="entry__meta">
                                    <li><a href="#0">{this.props.featured_blogs.th_author}</a></li>
                                    <li>{this.props.featured_blogs.th_date}</li>
                                </ul>
                            </div>
                        </div> {/*-- end entry__content */}

                    </div> {/*-- end entry */}

                </div> {/*-- end featured__small */}
            </div> {/*-- end featured */}

        </div> {/*-- end col-full */}
    </div>
    <Outlet/> 
    </>
    )
  }
}
