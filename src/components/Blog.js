import React, { Component } from "react";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import Body from "./api_decoder/Body";
import Shimmer from "./Shimmer";

//var decode = require('./api_decoder/Decoder')

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      blog_content: "",
      blog_title: "",
      blog_date: "",
      blog_tags: "",
      blog_type: "",
    };
  }

  componentDidMount() {
    fetch(`https://test-apis.mellob.co/api/jk`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "XnVprdMJuVuP7B23EfHr7MPmwFOAIrA6lShzZrUg",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            blog_content: result["blog-content"],
            blog_title: result.title,
            blog_date: result.date,
            blog_tags: result["post-tags"],
            blog_type: result["blog_type"],
          });
          //console.log(result["blog_type"]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    if (this.state.error) {
      return <p>this.state.error</p>;
    } else if (!this.state.isLoaded) {
      return (
        <Shimmer toggleMenu={this.props.toggleMenu} menu={this.props.menu}/>
      );
    } else {
      return (
        <>
          <PageHeader css="s-pageheader" featured={false} current="blog" />
          <Body
            blog_content={this.state.blog_content}
            blog_title={this.state.blog_title}
            blog_date={this.state.blog_date}
            blog_tags={this.state.blog_tags}
            type={this.state.blog_type}
          />
          <Footer />
        </>
      );
    }
  }
}
