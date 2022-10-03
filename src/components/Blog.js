import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import Body from "./api_decoder/Body";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export default function Test(props) {
  const params = useParams();

  const [blogcontent, blog_content] = useState("");
  const [blogtitle, blog_title] = useState("");
  const [blogtags, blog_tags] = useState("");
  const [blogdate, blog_date] = useState("");
  const [blogtype, blog_type] = useState("");
  const [isloaded, isLoaded] = useState(false);
  const [err, Error] = useState(null);
  const [req, request] = useState(false);
  useEffect(() => {
    if (!req) {
      fetch(`https://test-apis.mellob.co/api/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "XnVprdMJuVuP7B23EfHr7MPmwFOAIrA6lShzZrUg",
          context: "get_blog",
          blog_title: params.id,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            isLoaded(true);
            blog_content(result["blog-content"]);
            blog_title(result.title);
            blog_date(result.date);
            blog_tags(result["post-tags"]);
            blog_type(result["blog_type"]);
            request(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            isLoaded(true);
            Error(error);
            request(true);
          }
        );
    } else {
    }
  });
  if (err) {
    return <p>{err}</p>;
  } else if (!isloaded) {
    return <Shimmer toggleMenu={props.toggleMenu} menu={props.menu} />;
  } else {
    return (
      <>
        <PageHeader css="s-pageheader" featured={false} current="blog" />
        <Body
          blog_content={blogcontent}
          blog_title={blogtitle}
          blog_date={blogdate}
          blog_tags={blogtags}
          type={blogtype}
        />
        <Footer />
      </>
    );
  }
}
