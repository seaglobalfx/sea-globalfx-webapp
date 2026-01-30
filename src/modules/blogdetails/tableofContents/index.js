"use client";
import { marked } from "marked";
import { useEffect, useState } from "react";

import React from "react";
import styles from "./tableofContents.module.scss";
export default function TableofContents({ blogDetail }) {
  const [activeContent, setActiveContent] = useState("");

  const collectHeadings = () => {
    const newHeadings = [];
    const renderer = {
      heading({ text, depth }) {
        const slugID = text?.trim()?.toLowerCase()?.replace(/\s+/g, "-")?.trim();
        newHeadings.push({ text, depth, slugID });
        return `<h${depth} dir="auto" title="${text}" id="${slugID}">${text}</h${depth}>\n`;
      },
      table(header, body) {
        return `<div class='blogtable'><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
      },
    };
    marked.use({ renderer });
    marked(blogDetail?.blogContent || "");
    return newHeadings;
  };

  const handleScroll = (e, slugID) => {
    if (e) e.preventDefault();
    const element = document.getElementById(slugID);
    if (element) {
      const headerHeight = 110;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleWindowScroll = () => {
    const scrollPosition = window.scrollY;
    const headings = collectHeadings().filter((heading) => heading.depth === 1 || heading.depth === 2);
    for (const heading of headings) {
      const element = document.getElementById(heading.slugID);
      if (element) {
        const headerHeight = 110;
        const elementTop = element.offsetTop - headerHeight;
        const elementBottom = elementTop + element.clientHeight;
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveContent(heading.slugID);
          break;
        }
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <div className={styles.tableofContents}>
      <div className="container-xs">
        <div className={styles.grid}>
          <div className={styles.griditems}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h2>Table of Contents</h2>
              </div>
              <div className={styles.list}>
                <ol>
                  {collectHeadings()?.map(
                    (heading, i) =>
                      (heading.depth === 1 || heading.depth === 2) && (
                        <li
                          key={i}
                          onClick={(e) => handleScroll(e, heading.slugID)}
                          className={activeContent === heading?.slugID ? styles.active : ""}
                          dangerouslySetInnerHTML={{
                            __html: marked(heading?.text || ""),
                          }}
                        ></li>
                      ),
                  )}
                </ol>
              </div>
            </div>
          </div>
          <div className={styles.griditems}>
            {blogDetail?.blogContent && (
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: marked(blogDetail?.blogContent || ""),
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
