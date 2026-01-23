"use client";
import React, { useEffect, useState } from "react";
import styles from "./blogList.module.scss";
import classNames from "classnames";
import { GetAllCategories } from "@/graphql/query/getAllCategory";
import { GetAllBlogs } from "@/graphql/query/getAllBlogs";
import Link from "next/link";
import moment from "moment";
import { IMAGE_URL } from "@/utils/config";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
const DownIcon = "/assets/icons/down-xs.svg";
const BlogImage = "/assets/images/blog-img.png";
export default function BlogList() {
  const [dropdown, setDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const params = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { data } = useQuery(GetAllCategories, {
    variables: {
      pagination: {
        limit: 500,
      },
    },
  });

  const { data: latestData } = useQuery(GetAllBlogs, {
    variables: {
      pagination: {
        limit: 10,
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
          {latestData?.blogs_connection?.nodes
            ?.filter((item) => item?.slug !== params?.slug)
            ?.map((blog) => {
              return (
                <Link href={`/blog/${blog.slug}`} key={blog.slug}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={blog.coverImage?.url ? `${IMAGE_URL}${blog.coverImage.url}` : ""} alt={blog.title || "Blog image"} />
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
      </div>
    </div>
  );
}
