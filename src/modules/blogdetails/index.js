import React from "react";
import BlogdetailsBanner from "./blogdetailsBanner";
import TableofContents from "./tableofContents";
import BlogList from "../blog/blogList";

export default function BlogDetails({ blogDetail }) {
  return (
    <div>
      <BlogdetailsBanner blogDetail={blogDetail} />
      <TableofContents blogDetail={blogDetail} />
      <BlogList />
    </div>
  );
}
