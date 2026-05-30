"use client";

import React, { useState } from "react";
import styles from "./latestBlogs.module.scss";
import Pagination from "@/components/pagination";
import classNames from "classnames";
import { GetAllCategories } from "@/graphql/query/getAllCategory";
import { useQuery } from "@apollo/client";
import { IMAGE_URL } from "@/utils/config";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { formatDate } from "@/utils/formatDate";

const DownIcon = "/assets/icons/down-xs.svg";

export default function LatestBlogs({
  allBlog,
  paginationInfo,
  currentPage,
  setCurrentPage,
  selectedCategory,
  setSelectedCategory,
}) {
  const { t, locale } = useLanguage();
  const [dropdown, setDropdown] = useState(false);

  const { data } = useQuery(GetAllCategories, {
    variables: {
      pagination: {
        limit: 500,
      },
    },
  });

  const categoryLabel =
    selectedCategory === "all" ? t("latestBlogs.allCategories") : selectedCategory;

  return (
    <div className={styles.latestBlogsPageAlignment}>
      <div className="container-xs">
        <div className={styles.headerAlignment}>
          <div className={styles.text}>
            <h2>
              {t("latestBlogs.titleStart")}
              <span>{t("latestBlogs.titleSpan")}</span>
            </h2>
          </div>
          <div className={styles.button}>
            <button type="button" onClick={() => setDropdown(!dropdown)}>
              {categoryLabel}
              <img
                className={classNames(dropdown ? styles.rotate : "")}
                src={DownIcon}
                alt=""
              />
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
                    {t("latestBlogs.allCategories")}
                  </span>
                )}
                {data?.categories?.map((category) => (
                  <span
                    key={category.documentId}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setDropdown(false);
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.blogAllCardGrid}>
          {allBlog?.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.documentId || blog.slug}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img
                    src={`${IMAGE_URL}${blog.coverImage?.url}`}
                    alt={blog?.title || ""}
                  />
                </div>
                <div className={styles.details}>
                  <h3>{blog?.title}</h3>
                  <div className={styles.textAlignment}>
                    <span>{blog?.author?.name}</span>
                    <span className={styles.dateSep}>
                      {formatDate(blog?.createdAt, locale, "D MMMM YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {allBlog?.length > 0 && (
          <Pagination
            nPages={paginationInfo?.pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
