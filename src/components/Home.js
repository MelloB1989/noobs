import React, { Component } from 'react';
import Footer from './Footer';
import PageHeader from './PageHeader';

export default class Home extends Component {
  render() {
    return (
      <>
      <PageHeader css="s-pageheader s-pageheader--home" menu={this.props.menu} toggleMenu={this.props.toggleMenu} featured={true} current="home"/>
      <Footer />
      </>
    )
  }
}
