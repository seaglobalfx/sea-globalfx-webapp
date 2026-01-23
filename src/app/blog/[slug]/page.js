import { graphcms } from "@/graphql/graphQlClientServer";
import { GetBlogDetails } from "@/graphql/query/getBlogDetails";
import BlogDetails from "@/modules/blogdetails";
import React from "react";

export default async function page({ params }) {
  const { slug } = await params;

  const GetBlogDetails_Variables = {
    filters: {
      slug: {
        eq: slug,
      },
    },
    pagination: {
      limit: 50,
    },
  };
  const BlogDetail = await graphcms?.request(GetBlogDetails, GetBlogDetails_Variables);

  return (
    <div>
      <BlogDetails blogDetail={BlogDetail?.blogs_connection?.nodes?.[0]} />
    </div>
  );
}
