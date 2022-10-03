import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogResults from './BlogResults';
import Footer from './Footer';
import PageHeader from './PageHeader';
import Shimmer from './Shimmer';

export default function Blogs(props) {
  const params = useParams();
  const [resultarticles, result_articles] = useState([]);
  const [req, request] = useState(false);
  const [isloaded, isLoaded] = useState(false);
  const [nodata, noData] = useState(false);

  useEffect(() => {
    if (!req) {
      fetch(`https://test-apis.mellob.co/api/${params.category}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "XnVprdMJuVuP7B23EfHr7MPmwFOAIrA6lShzZrUg",
          context: "get_blogs",
          category: params.category,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            isLoaded(true);
            result_articles(result.posts);
            request(true);
            console.log(result.length)
            if(result.length <= 1){
              noData(true);
            }
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            isLoaded(false);
            Error(error);
            request(true);
          }
        );
    } else {
    }
  });

  return (
    <>
    <PageHeader menu={props.menu} toggleMenu={props.toggleMenu} css="s-pageheader" current="blog" featured={false}/>
    {nodata ? <p>No content</p> : isloaded ? <BlogResults result_articles={resultarticles}/> : <Shimmer type="card"/>}
    <Footer />
    </>
  )
}
