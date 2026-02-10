import { gql } from "@apollo/client";

export const CreateContactUs = gql`
  mutation Mutation($data: ContactUsInput!) {
  createContactUs(data: $data) {
    createdAt
    documentId
    email
    message
    publishedAt
    updatedAt
    userName
  }
}
`;
