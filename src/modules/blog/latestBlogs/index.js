"use client";
import React, { useState } from "react";
import styles from "./latestBlogs.module.scss";
import Pagination from "@/components/pagination";
import classNames from "classnames";
import { GetAllCategories } from "@/graphql/query/getAllCategory";
import { useQuery } from "@apollo/client";
import { IMAGE_URL } from "@/utils/config";
import Link from "next/link";
import moment from "moment";
const DownIcon = "/assets/icons/down-xs.svg";
const BlogImage = "/assets/images/blog-img.png";
export default function LatestBlogs({ allBlog, paginationInfo, currentPage, setCurrentPage, selectedCategory, setSelectedCategory }) {
  const [dropdown, setDropdown] = useState(false);
  const { data } = useQuery(GetAllCategories, {
    variables: {
      pagination: {
        limit: 500,
      },
    },
  });
  return (
    <div className={styles.latestBlogsPageAlignment}>
      <div className="container-xs">
        <div className={styles.headerAlignment}>
          <div className={styles.text}>
            <h2>
              Latest <span>Blogs</span>
            </h2>
          </div>
          <div className={styles.button}>
            <button onClick={() => setDropdown(!dropdown)}>
              {selectedCategory === "all" ? "All Categories" : selectedCategory}
              <img className={classNames(dropdown ? styles.rotate : "")} src={DownIcon} alt="DownIcon" />
            </button>
            <div className={classNames(styles.dropdown, dropdown ? styles.show : styles.hide)}>
              <div className={styles.sapcing}>
                {selectedCategory !== "all" && (
                  <span
                    onClick={() => {
                      setSelectedCategory("all");
                      setDropdown(false);
                    }}
                  >
                    All Categories
                  </span>
                )}
                {data?.categories?.map((category) => (
                  <>
                    <span
                      key={category.documentId}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setDropdown(false);
                      }}
                    >
                      {category.name}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.blogAllCardGrid}>
          {allBlog?.map((blog, i) => {
            return (
              <Link href={`/blog/${blog.slug}`} key={i}>
                <div className={styles.card} key={i}>
                  <div className={styles.cardImage}>
                    <img src={`${IMAGE_URL}${blog.coverImage?.url}`} alt="BlogImage" />
                  </div>
                  <div className={styles.details}>
                    <h3>{blog.title}</h3>
                    <div className={styles.textAlignment}>
                      <span>{blog.author?.name}</span>
                      <span>. {moment(blog.publishedAt).format("D MMMM YYYY")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {allBlog?.length > 0 && <Pagination nPages={paginationInfo?.pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      </div>
    </div>
  );
}