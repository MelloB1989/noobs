import React, { Component } from 'react'

export default class Blog extends Component {
  render() {

    const get_contents = async () => {
      const data = await fetch(/*`${api.URL}`*/"https://test-apis.mellob.co", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          //'blog-type' : type,
          //'blog-title' : title
          //"Authorization": api.API_KEY,
        }
      })
      .then(response => response.json())
      .then(
        (result) => {
          if (result.error){
          return(result.error, "warning")  
          }
          else{
            return(result)
            //Convert response to HTML
        }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            return(error)
        }
    )
    return (data)
    }

    const content = get_contents()
    console.log(content)

    return (
      <div>
        HI <p>{content.title}</p>
      </div>
    )
  }
}
