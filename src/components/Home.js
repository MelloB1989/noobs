import React, { Component } from 'react';
import BlogResults from './BlogResults';
import Footer from './Footer';
import PageHeader from './PageHeader';
import Shimmer from './Shimmer';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      blogs : []
    };
  }

  componentDidMount(){
    fetch(`https://test-apis.mellob.co/api/home_blogs`, {
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
            blogs : result.posts
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
    return (
      <>
      <PageHeader css="s-pageheader s-pageheader--home" menu={this.props.menu} toggleMenu={this.props.toggleMenu} featured={true} current="home"/>
      {this.state.isLoaded ? (<BlogResults result_articles={this.state.blogs}/>) : (<Shimmer />)}
      <Footer />
      </>
    )
  }
}
