import React from "react";
import styles from "./blogdetailsBanner.module.scss";
import moment from "moment";
import { IMAGE_URL } from "@/utils/config";
const BlogBannerImage = "/assets/images/blog-frame.png";
export default function BlogdetailsBanner({ blogDetail }) {
  return (
    <div className={styles.blogdetailsBanner}>
      <div className="container-xs">
        <div className={styles.image}>
          <img src={`${IMAGE_URL}${blogDetail?.detailImage?.url}` || BlogBannerImage} alt="BlogBannerImage" />
        </div>
        <div className={styles.mainDetails}>
          <h1>{blogDetail?.title}</h1>
          <div className={styles.subtextAlignment}>
            <span>{moment(blogDetail?.createdAt).format("DD MMM YYYY")}</span>
            <span>|</span>
            <span>By {blogDetail?.author?.name}</span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
