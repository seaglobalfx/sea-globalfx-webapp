import { gql } from "@apollo/client";

export const GetAllCategories = gql`
  query Categories($pagination: PaginationArg) {
    categories(pagination: $pagination) {
      documentId
      name
      slug
      description
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
