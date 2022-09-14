import api from './api_secrets.json' assert {type: "json"}
import fetch from "node-fetch";


export default function hello(){
    return "default"
}

export async function get_blog_contents() {
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
            return(result.status)
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

export async function test() {
    const response = await fetch("https://test-apis.mellob.co");
    const data = await response.json()
    //console.log(data['blog-content'])
    return data
}