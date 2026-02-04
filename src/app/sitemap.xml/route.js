import { graphcms } from "@/graphql/graphQlClientServer";
import { GetAllBlogs } from "@/graphql/query/getAllBlogs";
import { getServerSideSitemap } from "next-sitemap";

export async function GET() {
  const baseUrl = "https://seaglobalfx.com";

  const staticUrls = [
    { path: "/", changefreq: "daily", priority: 1 },
    { path: "/accounts", changefreq: "daily", priority: 1 },
    { path: "/advanced-trading-solutions", changefreq: "daily", priority: 1 },
    { path: "/commodities", changefreq: "daily", priority: 1 },
    { path: "/company", changefreq: "daily", priority: 1 },
    { path: "/crypto", changefreq: "daily", priority: 1 },
    { path: "/etfs", changefreq: "daily", priority: 1 },
    { path: "/forex-market", changefreq: "daily", priority: 1 },
    { path: "/indices-market", changefreq: "daily", priority: 1 },
    { path: "/platforms", changefreq: "daily", priority: 1 },
    { path: "/stocks", changefreq: "daily", priority: 1 },
    { path: "/privacy-policy", changefreq: "daily", priority: 1 },
    { path: "/terms-and-conditions", changefreq: "daily", priority: 1 },
    { path: "/blog", changefreq: "daily", priority: 1 },
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