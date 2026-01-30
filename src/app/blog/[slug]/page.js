import { graphcms } from "@/graphql/graphQlClientServer";
import { GetBlogDetails } from "@/graphql/query/getBlogDetails";
import BlogDetails from "@/modules/blogdetails";
import { IMAGE_URL } from "@/utils/config";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const GetBlogDetails_Variables = {
    filters: {
      slug: {
        eq: slug,
      },
    },
  };
  const BlogDetail = await graphcms?.request(GetBlogDetails, GetBlogDetails_Variables);
  const keywords = BlogDetail?.blogs_connection?.nodes?.[0]?.seo?.keywords?.map((item) => item?.name)?.join(", ");
  const seoData = {
    Title: BlogDetail?.blogs_connection?.nodes?.[0]?.seo?.title || "",
    Description: BlogDetail?.blogs_connection?.nodes?.[0]?.seo?.description || "",
    Keywords: keywords || "",
    OG_Img: `${IMAGE_URL}${BlogDetail?.blogs_connection?.nodes?.[0]?.seo?.image?.url}` || "",
    URL: `https://seaglobalfx.com/blog/${slug}`,
  };
  return {
    title: seoData?.Title,
    description: seoData?.Description,
    keywords: seoData?.Keywords,
    authors: [{ name: "seaglobalfx" }],
    openGraph: {
      title: seoData?.Title,
      description: seoData?.Description,
      url: seoData?.URL,
      images: seoData?.OG_Img,
      locale: "en_US",
      siteName: "seaglobalfx",
      type: "website",
      imageAlt: seoData?.Title,
    },
    twitter: {
      card: "summary_large_image",
      handle: "@seaglobalfx",
      site: "@seaglobalfx",
      title: seoData?.Title,
      description: seoData?.Description,
      images: seoData?.OG_Img,
      url: seoData?.URL,
      imageAlt: seoData?.Title,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: seoData?.URL,
    },
    publisher: "seaglobalfx Team",
  };
}

export default async function page({ params }) {
  const { slug } = await params;

  const GetBlogDetails_Variables = {
    filters: {
      slug: {
        eq: slug,
      },
    },
    pagination: {
      limit: 50,
    },
  };
  const BlogDetail = await graphcms?.request(GetBlogDetails, GetBlogDetails_Variables);
  return (
    <div>
      <BlogDetails blogDetail={BlogDetail?.blogs_connection?.nodes?.[0]} />
    </div>
  );
}
