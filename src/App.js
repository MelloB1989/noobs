import React, { Component } from 'react'
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      css: "s-pageheader s-pageheader--home"
    };
  }

  render() {

    

    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}