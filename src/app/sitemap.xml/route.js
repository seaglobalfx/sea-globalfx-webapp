import { graphcms } from "@/graphql/graphQlClientServer";
import { GetAllBlogs } from "@/graphql/query/getAllBlogs";
import { getServerSideSitemap } from "next-sitemap";

export async function GET() {
  const baseUrl = "https://seaglobalfx.com";

  const staticUrls = [
    { path: "/", changefreq: "daily", priority: 1.0 },
    { path: "/accounts", changefreq: "monthly", priority: 0.8 },
    { path: "/advanced-trading-solutions", changefreq: "monthly", priority: 0.8 },
    { path: "/commodities", changefreq: "weekly", priority: 0.9 },
    { path: "/about-us", changefreq: "daily", priority: 1 },
    { path: "/contact-us", changefreq: "daily", priority: 0.9 },
    { path: "/crypto", changefreq: "weekly", priority: 0.9 },
    { path: "/etfs", changefreq: "weekly", priority: 0.9 },
    { path: "/forex-market", changefreq: "weekly", priority: 0.9 },
    { path: "/indices-market", changefreq: "weekly", priority: 0.9 },
    { path: "/platforms", changefreq: "monthly", priority: 0.8 },
    { path: "/stocks", changefreq: "weekly", priority: 0.9 },
    { path: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
    { path: "/terms-and-conditions", changefreq: "yearly", priority: 0.3 },
    { path: "/blog", changefreq: "weekly", priority: 0.7 },
  ];

  let blogUrls = [];

  try {
    const variables = {
      pagination: { limit: 3000 },
      sort: ["publishedAt:desc"],
    };
    const data = await graphcms.request(GetAllBlogs, variables);
    blogUrls =
      data?.blogs_connection?.nodes?.map((blog) => ({
        path: `/blog/${blog.slug}`,
        changefreq: "daily",
        priority: 1,
      })) || [];
  } catch (error) {
    console.error("Sitemap CMS error:", error);
  }

  const allUrls = [...staticUrls, ...blogUrls];

  const fields = allUrls.map(({ path, ...rest }) => ({
    loc: `${baseUrl}${path}`,
    lastmod: new Date().toISOString(),
    ...rest,
  }));

  return getServerSideSitemap(fields, {
    "Content-Type": "text/xml, application/xml",
  });
}