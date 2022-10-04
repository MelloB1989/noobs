import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
//import "./main.css"
//import Blog from "./Blog";
//import Shimmer from './Shimmer'

export default class BlogResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
  }

  componentDidUpdate(){
    if (Screen.width <= 600){
      this.setState({mobile: true});
      console.log(this.state.mobile);
    }
  }

  render() {
    //var articles = Array.from(this.props.result_articles)
    //console.log(articles)
    /*
    const link_to = (blog_t) => {
      <Blog blog={blog_t}/>
    }
    */
    return (
      this.props && (
        <>
          <section className="s-content">
            <div className="row masonry-wrap">
              <div className="masonry">
                <div className="grid-sizer"></div>
                {this.props.result_articles.map((article) => {
                  if (article.type.toString() === "format-standard") {
                    return (
                      <article
                        className="masonry__brick entry format-standard"
                        data-aos="fade-up"
                        key={article.title}
                      >
                        <div className="entry__thumb">
                          <Link
                            to={`/blogs/${article.id}`}
                            className="entry__thumb-link"
                          >
                            <img
                              src={article.thumbnail}
                              srcSet={`${article.thumbnail} 1x, ${article.thumbnail800} 2x`}
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="entry__text">
                          <div className="entry__header">
                            <div className="entry__date">
                              <a href="single-standard.html">
                                {article.date.toString()}
                              </a>
                            </div>
                            <h1 className="entry__title">
                              <Link to={`/blogs/${article.id}`}>
                                {article.title.toString()}
                              </Link>
                            </h1>
                          </div>
                          <div className="entry__excerpt">
                            <p>{article.excerpt.toString()}</p>
                          </div>
                          <div className="entry__meta">
                            <span className="entry__meta-links">
                              <a href="category.html">
                                {article.cat.toString()}
                              </a>
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  } else if (article.type.toString() === "format-quote") {
                    return (
                      <article
                        className="masonry__brick entry format-quote"
                        data-aos="fade-up"
                        key={article.quote}
                      >
                        <div className="entry__thumb">
                          <blockquote>
                            <p>{article.quote.toString()}</p>

                            <cite>{article.citer.toString()}</cite>
                          </blockquote>
                        </div>
                      </article>
                    );
                  } else if (article.type.toString() === "format-video") {
                    return (
                      <article
                        className="masonry__brick entry format-video"
                        data-aos="fade-up"
                      >
                        <div className="entry__thumb video-image">
                          <a
                            href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0"
                            data-lity
                          >
                            <img
                              src="images/thumbs/masonry/shutterbug-400.jpg"
                              srcSet="images/thumbs/masonry/shutterbug-400.jpg 1x, images/thumbs/masonry/shutterbug-800.jpg 2x"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="entry__text">
                          <div className="entry__header">
                            <div className="entry__date">
                              <a href="single-video.html">December 10, 2017</a>
                            </div>
                            <h1 className="entry__title">
                              <a href="single-video.html">
                                Key Benefits Of Family Photography.
                              </a>
                            </h1>
                          </div>
                          <div className="entry__excerpt">
                            <p>
                              Lorem ipsum Sed eiusmod esse aliqua sed incididunt
                              aliqua incididunt mollit id et sit proident dolor
                              nulla sed commodo est ad minim elit reprehenderit
                              nisi officia aute incididunt velit sint in
                              aliqua...
                            </p>
                          </div>
                          <div className="entry__meta">
                            <span className="entry__meta-links">
                              <a href="category.html">Family</a>
                              <a href="category.html">Photography</a>
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  } else if (article.type.toString() === "format-gallery") {
                    return (
                      <article
                        className="masonry__brick entry format-gallery"
                        data-aos="fade-up"
                      >
                        <div className="entry__thumb slider">
                          <div className="slider__slides">
                            <div className="slider__slide">
                              <img
                                src="images/thumbs/masonry/gallery/gallery-1-400.jpg"
                                srcSet="images/thumbs/masonry/gallery/gallery-1-400.jpg 1x, images/thumbs/masonry/gallery/gallery-1-800.jpg 2x"
                                alt=""
                              />
                            </div>
                            <div className="slider__slide">
                              <img
                                src="images/thumbs/masonry/gallery/gallery-2-400.jpg"
                                srcSet="images/thumbs/masonry/gallery/gallery-2-400.jpg 1x, images/thumbs/masonry/gallery/gallery-2-800.jpg 2x"
                                alt=""
                              />
                            </div>
                            <div className="slider__slide">
                              <img
                                src="images/thumbs/masonry/gallery/gallery-3-400.jpg"
                                srcSet="images/thumbs/masonry/gallery/gallery-3-400.jpg 1x, images/thumbs/masonry/gallery/gallery-3-800.jpg 2x"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="entry__text">
                          <div className="entry__header">
                            <div className="entry__date">
                              <a href="single-gallery.html">
                                December 10, 2017
                              </a>
                            </div>
                            <h1 className="entry__title">
                              <a href="single-gallery.html">
                                Workspace Design Trends and Ideas.
                              </a>
                            </h1>
                          </div>
                          <div className="entry__excerpt">
                            <p>
                              Lorem ipsum Sed eiusmod esse aliqua sed incididunt
                              aliqua incididunt mollit id et sit proident dolor
                              nulla sed commodo est ad minim elit reprehenderit
                              nisi officia aute incididunt velit sint in
                              aliqua...
                            </p>
                          </div>
                          <div className="entry__meta">
                            <span className="entry__meta-links">
                              <a href="category.html">Work</a>
                              <a href="category.html">Management</a>
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  } else if (article.type.toString() === "format-audio") {
                    return (
                      <article
                        className="masonry__brick entry format-audio"
                        data-aos="fade-up"
                      >
                        <div className="entry__thumb">
                          <a
                            href="single-audio.html"
                            className="entry__thumb-link"
                          >
                            <img
                              src="images/thumbs/masonry/guitarman-400.jpg"
                              srcSet="images/thumbs/masonry/guitarman-400.jpg 1x, images/thumbs/masonry/guitarman-800.jpg 2x"
                              alt=""
                            />
                          </a>
                          <div className="audio-wrap">
                            <audio
                              id="player"
                              src="media/AirReview-Landmarks-02-ChasingCorporate.mp3"
                              width="100%"
                              height="42"
                              controls="controls"
                            ></audio>
                          </div>
                        </div>

                        <div className="entry__text">
                          <div className="entry__header">
                            <div className="entry__date">
                              <a href="single-audio.html">December 10, 2017</a>
                            </div>
                            <h1 className="entry__title">
                              <a href="single-audio.html">
                                What Your Music Preference Says About You and
                                Your Personality.
                              </a>
                            </h1>
                          </div>
                          <div className="entry__excerpt">
                            <p>
                              Lorem ipsum Sed eiusmod esse aliqua sed incididunt
                              aliqua incididunt mollit id et sit proident dolor
                              nulla sed commodo est ad minim elit reprehenderit
                              nisi officia aute incididunt velit sint in
                              aliqua...
                            </p>
                          </div>
                          <div className="entry__meta">
                            <span className="entry__meta-links">
                              <a href="category.html">Music</a>
                              <a href="category.html">Lifestyle</a>
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  } else if (article.type.toString() === "format-link") {
                    return (
                      <article
                        className="masonry__brick entry format-link"
                        data-aos="fade-up"
                      >
                        <div className="entry__thumb">
                          <div className="link-wrap">
                            <p>
                              The Only Resource You Will Need To Start a Blog
                              Using WordPress.
                            </p>
                            <cite>
                              <a
                                target="_blank"
                                href="https://colorlib.com/"
                                rel="noreferrer"
                              >
                                https://colorlib.com
                              </a>
                            </cite>
                          </div>
                        </div>
                      </article>
                    );
                  }
                  return <p></p>;
                })}
              </div>{" "}
              {/* end masonry */}
            </div>{" "}
            {/* end masonry-wrap */}
          </section>{" "}
          {/* s-content */}
          <Outlet />
        </>
      )
    );
  }
}
