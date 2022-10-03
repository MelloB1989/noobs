import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Auth from "./Auth";
import Blog from "./components/Blog";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      css: "s-pageheader s-pageheader--home",
      mode: "light",
      menu: "close",
    };
  }

  render() {
    const toggleMenu = () => {
      if (this.state.menu === "open") {
        this.setState({ menu: "close" });
      } else {
        this.setState({ menu: "open" });
      }
    };

    const toggleMode = () => {
      if (this.state.mode === "light") {
        this.setState({
          mode: "dark",
        });
      } else {
        this.setState({
          mode: "light",
        });
      }
      //console.log(this.state.mode)
    };

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home toggleMenu={toggleMenu} menu={this.state.menu} />}
            />
            <Route
              path="/contact"
              element={
                <Contact toggleMenu={toggleMenu} menu={this.state.menu} />
              }
            />
            <Route 
            path="/blogs/:id"
            element={<Blog toggleMenu={toggleMenu} menu={this.state.menu}/>}
            />
            <Route
              path="/category/:category"
              exact={true}
              element={
                <Blogs
                  toggleMenu={toggleMenu}
                  menu={this.state.menu}
                />
              }
            />
          </Routes>
          <Auth mode={this.state.mode} toggleMode={toggleMode} />
        </BrowserRouter>
      </>
    );
  }
}
