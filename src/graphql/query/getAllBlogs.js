import { gql } from "@apollo/client";

export const GetAllBlogs = gql`
  query Blogs($pagination: PaginationArg, $filters: BlogFiltersInput, $sort: [String]) {
    blogs_connection(pagination: $pagination, filters: $filters, sort: $sort) {
      pageInfo {
        total
        page
        pageSize
        pageCount
      }
      nodes {
        author {
          id
          name
          picture {
            url
          }
          biography
          title
        }
        title
        slug
        shortDescription
        coverImage {
          url
        }
        documentId
        categories {
          documentId
          name
          slug
          description
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
