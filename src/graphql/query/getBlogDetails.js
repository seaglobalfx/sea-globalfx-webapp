import { gql } from "@apollo/client";

export const GetBlogDetails = gql`
  query Blogs_connection($filters: BlogFiltersInput) {
    blogs_connection(filters: $filters) {
      nodes {
        documentId
        title
        slug
        coverImage {
          url
        }
        shortDescription
        detailImage {
          url
        }
        blogContent
        categories {
          documentId
          name
          slug
          description
          createdAt
          updatedAt
          publishedAt
        }
        seo {
          id
          title
          description
          image {
            url
          }
          url
          slug
          keywords
        }
        author {
          id
          name
          picture {
            url
          }
          biography
          title
        }
        faq {
          id
          question
          answer
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
`;
