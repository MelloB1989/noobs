import React, { Component } from 'react'

export default class Featured extends Component {
  render() {
    return (
        <div className="pageheader-content row">
        <div className="col-full">

            <div className="featured">

                <div className="featured__column featured__column--big">
                    <div className="entry" style={{"backgroundImage" : `url("https://s3.ap-south-1.amazonaws.com/cdn.socify.co.in/noobs/images/thumbs/featured/featured-guitarman.jpg")`}}>
                        
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
                        </div> {/*-- end entry__content */}
                        
                    </div> {/*-- end entry */}
                </div> {/*-- end featured__big */}

                <div className="featured__column featured__column--small">

                    <div className="entry" style={{backgroundImage : `url("https://s3.ap-south-1.amazonaws.com/cdn.socify.co.in/noobs/images/thumbs/featured/featured-watch.jpg")`}}>
                        
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
                        </div> {/*-- end entry__content */}
                      
                    </div> {/*-- end entry */}

                    <div className="entry" style={{backgroundImage : `url("https://s3.ap-south-1.amazonaws.com/cdn.socify.co.in/noobs/images/thumbs/featured/featured-beetle.jpg")`}}>

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
                        </div> {/*-- end entry__content */}

                    </div> {/*-- end entry */}

                </div> {/*-- end featured__small */}
            </div> {/*-- end featured */}

        </div> {/*-- end col-full */}
    </div> 
    )
  }
}
