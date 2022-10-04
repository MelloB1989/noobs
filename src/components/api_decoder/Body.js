import React, { Component } from "react";

export default class Body extends Component {
  render() {
    var content_html = <p></p>;
    if (this.props.type.toString() === "standard-post-blog") {
      content_html = (
        <section className="s-content s-content--narrow s-content--no-padding-bottom">
          <article className="row format-standard">
            <div className="s-content__header col-full">
              <h1 className="s-content__header-title">
                {this.props.blog_title}
              </h1>
              <ul className="s-content__header-meta">
                <li className="date">{this.props.blog_date}</li>
                <li className="cat">
                  In
                  <a href="/"> Hacking</a>
                </li>
              </ul>
            </div>{" "}
            {/* end s-content__header */}
            <div className="s-content__media col-full">
              <div className="s-content__post-thumb">
                <img
                  src={this.props.blog_content[0]["image-url"]}
                  srcSet={`${this.props.blog_content[0]["image-url"]} 2000w, 
                                      ${this.props.blog_content[0]["image-url-1000"]} 1000w, 
                                      ${this.props.blog_content[0]["image-url-500"]} 500w`}
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  alt=""
                />
              </div>
            </div>{" "}
            {/* end s-content__media */}
            <div className="col-full s-content__main">
              <p className="lead">{this.props.blog_content[1]["lead"]}</p>
              <p>{this.props.blog_content[1]["lead-next"]}</p>
              {this.props.blog_content.map((component) => {
                if (component["content-type"] === "image") {
                  return (
                    <p>
                      <img
                        src="images/wheel-1000.jpg"
                        srcset="images/wheel-2000.jpg 2000w, images/wheel-1000.jpg 1000w, images/wheel-500.jpg 500w"
                        sizes="(max-width: 2000px) 100vw, 2000px"
                        alt=""
                      />
                    </p>
                  );
                } else if (component["content-type"] === "large-heading") {
                  return (
                    <>
                      <h2>{component["heading"].toString()}</h2>
                      <p>{component["heading-sub-content"].toString()}</p>
                    </>
                  );
                } else if (component["content-type"] === "blockquote") {
                  return (
                    <>
                      <blockquote>
                        <p>{component["quote"].toString()}</p>
                      </blockquote>
                      <p>{component["quote-sub"].toString()}</p>
                    </>
                  );
                } else if (component["content-type"] === "small-heading") {
                  return (
                    <>
                      <h3>{component["heading"].toString()}</h3>
                      <p>{component["heading-sub-content"].toString()}</p>
                    </>
                  );
                } else if (component["content-type"] === "code") {
                  return (
                    <pre>
                      <code>{component["code-content"].toString()}</code>
                    </pre>
                  );
                } else if (component["content-type"] === "paragraph") {
                  return <p>{component["content"].toString()}</p>;
                }
                //console.log(content_html+"here!!!")
                return <p></p>;
              })}
              <p className="s-content__tags">
                <span>Post Tags</span>
                <span className="s-content__tag-list">
                  {this.props.blog_tags.map((tag) => {
                    return <a href="/">{tag}</a>;
                  })}
                </span>
              </p>{" "}
              {/* end s-content__tags */}
              <div className="s-content__author">
                <img src="images/avatars/user-03.jpg" alt="" />

                <div className="s-content__author-about">
                  <h4 className="s-content__author-name">
                    <a href="#0">Jonathan Doe</a>
                  </h4>

                  <p>
                    Alias aperiam at debitis deserunt dignissimos dolorem
                    doloribus, fuga fugiat impedit laudantium magni maxime nihil
                    nisi quidem quisquam sed ullam voluptas voluptatum. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>

                  <ul className="s-content__author-social">
                    <li>
                      <a href="#0">Facebook</a>
                    </li>
                    <li>
                      <a href="#0">Twitter</a>
                    </li>
                    <li>
                      <a href="#0">GooglePlus</a>
                    </li>
                    <li>
                      <a href="#0">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="s-content__pagenav">
                <div className="s-content__nav">
                  <div className="s-content__prev">
                    <a href="#0" rel="prev">
                      <span>Previous Post</span>
                      Tips on Minimalist Design
                    </a>
                  </div>
                  <div className="s-content__next">
                    <a href="#0" rel="next">
                      <span>Next Post</span>
                      Less Is More
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* end s-content__pagenav */}
            </div>{" "}
            {/* end s-content__main */}
          </article>
          {/* comments
        ================================================== */}
          <div className="comments-wrap">
            <div id="comments" className="row">
              <div className="col-full">
                <h3 className="h2">5 Comments</h3>
                {/* commentlist */}
                <ol className="commentlist">
                  <li className="depth-1 comment">
                    <div className="comment__avatar">
                      <img
                        width="50"
                        height="50"
                        className="avatar"
                        src="images/avatars/user-01.jpg"
                        alt=""
                      />
                    </div>

                    <div className="comment__content">
                      <div className="comment__info">
                        <cite>Itachi Uchiha</cite>

                        <div className="comment__meta">
                          <time className="comment__time">
                            Dec 16, 2017 @ 23:05
                          </time>
                          <a className="reply" href="#0">
                            Reply
                          </a>
                        </div>
                      </div>

                      <div className="comment__text">
                        <p>
                          Adhuc quaerendum est ne, vis ut harum tantas noluisse,
                          id suas iisque mei. Nec te inani ponderum vulputate,
                          facilisi expetenda has et. Iudico dictas scriptorem an
                          vim, ei alia mentitum est, ne has voluptua praesent.
                        </p>
                      </div>
                    </div>
                  </li>{" "}
                  {/* end comment level 1 */}
                  <li className="thread-alt depth-1 comment">
                    <div className="comment__avatar">
                      <img
                        width="50"
                        height="50"
                        className="avatar"
                        src="images/avatars/user-04.jpg"
                        alt=""
                      />
                    </div>

                    <div className="comment__content">
                      <div className="comment__info">
                        <cite>John Doe</cite>

                        <div className="comment__meta">
                          <time className="comment__time">
                            Dec 16, 2017 @ 24:05
                          </time>
                          <a className="reply" href="#0">
                            Reply
                          </a>
                        </div>
                      </div>

                      <div className="comment__text">
                        <p>
                          Sumo euismod dissentiunt ne sit, ad eos iudico
                          qualisque adversarium, tota falli et mei. Esse euismod
                          urbanitas ut sed, et duo scaevola pericula splendide.
                          Primis veritus contentiones nec ad, nec et tantas
                          semper delicatissimi.
                        </p>
                      </div>
                    </div>

                    <ul className="children">
                      <li className="depth-2 comment">
                        <div className="comment__avatar">
                          <img
                            width="50"
                            height="50"
                            className="avatar"
                            src="images/avatars/user-03.jpg"
                            alt=""
                          />
                        </div>

                        <div className="comment__content">
                          <div className="comment__info">
                            <cite>Kakashi Hatake</cite>

                            <div className="comment__meta">
                              <time className="comment__time">
                                Dec 16, 2017 @ 25:05
                              </time>
                              <a className="reply" href="#0">
                                Reply
                              </a>
                            </div>
                          </div>

                          <div className="comment__text">
                            <p>
                              Duis sed odio sit amet nibh vulputate cursus a sit
                              amet mauris. Morbi accumsan ipsum velit. Duis sed
                              odio sit amet nibh vulputate cursus a sit amet
                              mauris
                            </p>
                          </div>
                        </div>

                        <ul className="children">
                          <li className="depth-3 comment">
                            <div className="comment__avatar">
                              <img
                                width="50"
                                height="50"
                                className="avatar"
                                src="images/avatars/user-04.jpg"
                                alt=""
                              />
                            </div>

                            <div className="comment__content">
                              <div className="comment__info">
                                <cite>John Doe</cite>

                                <div className="comment__meta">
                                  <time className="comment__time">
                                    Dec 16, 2017 @ 25:15
                                  </time>
                                  <a className="reply" href="#0">
                                    Reply
                                  </a>
                                </div>
                              </div>

                              <div className="comment__text">
                                <p>
                                  Investigationes demonstraverunt lectores
                                  legere me lius quod ii legunt saepius.
                                  Claritas est etiam processus dynamicus, qui
                                  sequitur mutationem consuetudium lectorum.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>{" "}
                  {/* end comment level 1 */}
                  <li className="depth-1 comment">
                    <div className="comment__avatar">
                      <img
                        width="50"
                        height="50"
                        className="avatar"
                        src="images/avatars/user-02.jpg"
                        alt=""
                      />
                    </div>

                    <div className="comment__content">
                      <div className="comment__info">
                        <cite>Shikamaru Nara</cite>

                        <div className="comment__meta">
                          <time className="comment-time">
                            Dec 16, 2017 @ 25:15
                          </time>
                          <a className="reply" href="/">
                            Reply
                          </a>
                        </div>
                      </div>

                      <div className="comment__text">
                        <p>
                          Typi non habent claritatem insitam; est usus legentis
                          in iis qui facit eorum claritatem.
                        </p>
                      </div>
                    </div>
                  </li>{" "}
                  {/* end comment level 1 */}
                </ol>{" "}
                {/* end commentlist */}
                {/* respond
                    ================================================== */}
                <div className="respond">
                  <h3 className="h2">Add Comment</h3>
                  <form
                    name="contactForm"
                    id="contactForm"
                    method="post"
                    action=""
                  >
                    <fieldset>
                      <div className="form-field">
                        <input
                          name="cName"
                          type="text"
                          id="cName"
                          className="full-width"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="form-field">
                        <input
                          name="cEmail"
                          type="text"
                          id="cEmail"
                          className="full-width"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="form-field">
                        <input
                          name="cWebsite"
                          type="text"
                          id="cWebsite"
                          className="full-width"
                          placeholder="Website"
                        />
                      </div>

                      <div className="message form-field">
                        <textarea
                          name="cMessage"
                          id="cMessage"
                          className="full-width"
                          placeholder="Your Message"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="submit btn--primary btn--large full-width"
                      >
                        Submit
                      </button>
                    </fieldset>
                  </form>{" "}
                  {/* end form */}
                </div>{" "}
                {/* end respond */}
              </div>{" "}
              {/* end col-full */}
            </div>{" "}
            {/* end row comments */}
          </div>{" "}
          {/* end comments-wrap */}
        </section>
      );
    } else {
      content_html = <p>{this.props.type}</p>;
    }
    return content_html;
  }
}
