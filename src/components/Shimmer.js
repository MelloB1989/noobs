import React, { Component } from 'react'
import PageHeader from './PageHeader'

export default class Shimmer extends Component {
  render() {
    return (
        <>
        <PageHeader
        css="s-pageheader"
        toggleMenu={this.props.toggleMenu}
        menu={this.props.menu}
        featured={false}
        current="blog"
      />
      <section className="s-content s-content--narrow s-content--no-padding-bottom">
        <article className="row format-standard">
          <div className="s-content__header col-full">
            <h1 className="s-content__header-title shimmer">
              Noobs by MelloB
            </h1>
          </div>{" "}
          {/* end s-content__header */}
          <div className="s-content s-content--narrow s-content--no-padding-bottom">
            <div class="card br shimmer">
              <div class="wrapper">
                <div class="comment br animate w80"></div>
                <div class="comment br animate w80"></div>
                <div class="comment br animate"></div>
                <div class="comment br animate"></div>
                <div class="comment br animate"></div>
                <div class="comment br animate"></div>
                <div class="comment br animate"></div>
                <div class="comment br animate"></div>
              </div>
            </div>
          </div>
        </article>
      </section>
      </>
    )
  }
}
