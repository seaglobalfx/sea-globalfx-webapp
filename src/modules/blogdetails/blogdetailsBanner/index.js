'use client';

import React from "react";
import styles from "./blogdetailsBanner.module.scss";
import { IMAGE_URL } from "@/utils/config";
import { useLanguage } from "@/context/LanguageContext";
import { formatDate } from "@/utils/formatDate";

const BlogBannerImage = "/assets/images/blog-frame.png";

export default function BlogdetailsBanner({ blogDetail }) {
  const { locale, t } = useLanguage();

  return (
    <div className={styles.blogdetailsBanner}>
      <div className="container-xs">
        <div className={styles.image}>
          <img
            src={`${IMAGE_URL}${blogDetail?.detailImage?.url}` || BlogBannerImage}
            alt=""
          />
        </div>
        <div className={styles.mainDetails}>
          <h1>{blogDetail?.title}</h1>
          <div className={styles.subtextAlignment}>
            <span>{formatDate(blogDetail?.createdAt, locale, "DD MMM YYYY")}</span>
            <span>|</span>
            <span>
              {t('blog.by')} {blogDetail?.author?.name}
            </span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
