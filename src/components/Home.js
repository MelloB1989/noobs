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
      isLoaded1: false,
      blogs : [],
      featured_blogs: [],
      noData: false
    };
  }

  componentDidMount(){
    fetch(`https://test-apis.mellob.co/api/home_blogs`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "XnVprdMJuVuP7B23EfHr7MPmwFOAIrA6lShzZrUg",
        "context": "home_blogs"
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            blogs : result.posts
          });
          if(result.length <= 1){
            this.setState({
              noData: true
            })
          }
          //console.log(result["blog_type"]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );

      fetch(`https://test-apis.mellob.co/api/featured`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "XnVprdMJuVuP7B23EfHr7MPmwFOAIrA6lShzZrUg",
        "context": "featured"
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded1: true,
            featured_blogs : result
          });
          //console.log(result["blog_type"]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded1: false,
            error,
          });
        }
      );
  }
  
  render() {
    return (
      <>
      <PageHeader css="s-pageheader s-pageheader--home" menu={this.props.menu} toggleMenu={this.props.toggleMenu} featured={true} featured_blogs={this.state.featured_blogs} current="home"/>
      {this.state.isLoaded && !this.state.noData && this.state.isLoaded1 ? (<BlogResults result_articles={this.state.blogs}/>) : (<Shimmer type="card"/>)}
      <Footer />
      </>
    )
  }
}
