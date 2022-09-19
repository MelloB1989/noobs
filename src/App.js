import React, { Component } from 'react';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import Blog from './components/Blog';
import Auth from './Auth';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      css: "s-pageheader s-pageheader--home",
    };
  }

  render() {
    
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/blogs/web_dev" element={<Blog category="web_dev"/>}/>
      <Route path="/blogs/app_dev" element={<Blog category="app_dev"/>}/>
      <Route path="/blogs/technology" element={<Blog category="technology"/>}/>
      <Route path="/blogs/hacking" element={<Blog category="hacking"/>}/>      
      </Routes>
      <Auth />
      </BrowserRouter>
      </>
    )
  }
}