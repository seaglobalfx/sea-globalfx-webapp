"use client";
import React, { useEffect, useState } from "react";
import BlogBanner from "./blogBanner";
import LatestBlogs from "./latestBlogs";
import { useQuery } from "@apollo/client";
import { GetAllBlogs } from "@/graphql/query/getAllBlogs";
import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(params.category || "all");
  const PAGE_SIZE = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { data: featuredData } = useQuery(GetAllBlogs, {
    variables: {
      pagination: {
        limit: 4,
      },
      filters: {
        categories: {
          name: {
            eq: selectedCategory === "all" ? undefined : selectedCategory,
          },
        },
      },
      sort: ["publishedAt:desc"],
    },
  });

  const { data: latestData } = useQuery(GetAllBlogs, {
    variables: {
      pagination: {
        start: 4 + (currentPage - 1) * PAGE_SIZE,
        limit: PAGE_SIZE,
      },
      filters: {
        categories: {
          name: {
            eq: selectedCategory === "all" ? undefined : selectedCategory,
          },
        },
      },
      sort: ["publishedAt:desc"],
    },
  });

  const totalBlogs = latestData?.blogs_connection?.pageInfo?.total || 0;
  const totalRemaining = Math.max(0, totalBlogs - 4);
  const customPageCount = Math.ceil(totalRemaining / PAGE_SIZE);

  const customPaginationInfo = {
    ...latestData?.blogs_connection?.pageInfo,
    pageCount: customPageCount,
  };

  return (
    <div>
      <BlogBanner featuredBlogs={featuredData?.blogs_connection?.nodes} />
      <LatestBlogs
        allBlog={latestData?.blogs_connection?.nodes}
        paginationInfo={customPaginationInfo}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}
