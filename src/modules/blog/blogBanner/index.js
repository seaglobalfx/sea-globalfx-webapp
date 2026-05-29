'use client';

import React from "react";
import styles from "./blogBanner.module.scss";
import { IMAGE_URL } from "@/utils/config";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { formatDate } from "@/utils/formatDate";

export default function BlogBanner({ featuredBlogs }) {
  const { locale, t } = useLanguage();

  if (!featuredBlogs || featuredBlogs.length === 0) return null;

  const mainBlog = featuredBlogs[0];
  const sideBlogs = featuredBlogs.slice(1, 4);

  return (
    <div className={styles.blogBannerSectionlignment}>
      <div className="container-xs">
        <div className={styles.grid}>
          <div className={styles.griditems}>
            {mainBlog && (
              <Link href={`/blog/${mainBlog.slug}`} className={styles.mainCard}>
                <div className={styles.image}>
                  <img src={`${IMAGE_URL}${mainBlog.coverImage?.url}`} alt={mainBlog.title} />
                </div>
                <div className={styles.layer}></div>
                <div className={styles.contentAlignment}>
                  <div className={styles.contentAlignmentSpacing}>
                    <h3>{mainBlog.title}</h3>
                    <div className={styles.textContent}>
                      <span>{formatDate(mainBlog.publishedAt, locale)}</span>
                      <span>|</span>
                      <span>{t('blog.by')} {mainBlog.author?.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className={styles.griditems}>
            <div className={styles.twoColGrid}>
              {sideBlogs.map((blog, index) => (
                <Link href={`/blog/${blog.slug}`} key={blog.documentId || index} className={styles.mainCard}>
                  <div className={styles.image}>
                    <img src={`${IMAGE_URL}${blog.coverImage?.url}`} alt={blog.title} />
                  </div>
                  <div className={styles.layer}></div>
                  <div className={styles.contentAlignment}>
                    <div className={styles.contentAlignmentSpacing}>
                      <h3>{blog.title}</h3>
                      <div className={styles.textContent}>
                        <span>{formatDate(blog.publishedAt, locale)}</span>
                        <span>|</span>
                        <span>{t('blog.by')} {blog.author?.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
