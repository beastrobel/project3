// Importing necessary module for GraphQL queries
import { gql } from '@apollo/client';

// GraphQL mutation for user login
export const LOGIN_PROFILE = gql`
  mutation LoginProfile($username: String!, $password: String!) {
    loginProfile(username: $username, password: $password) {
      user {
        _id
        username
        password
      }
      token
    }
  }
`;

// GraphQL mutation for adding a user profile
export const ADD_PROFILE = gql`
  mutation AddProfile($username: String!, $password: String!) {
    addProfile(username: $username, password: $password) {
      user {
        _id
        username
        password
      }
    }
  }
`;

// GraphQL mutation for adding a question
export const ADD_QUESTION = gql`
  mutation addQuestion($questionText: String!, $questionAuthor: String!) {
    addQuestion(questionText: $questionText, questionAuthor: $questionAuthor) {
      _id
      questionText
      questionAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// GraphQL mutation for adding a comment to a question
export const ADD_COMMENT = gql`
  mutation addComment(
    $questionId: ID!,
    $commentText: String!,
    $commentAuthor: String!
  ) {
    addComment(
      questionId: $questionId,
      commentText: $commentText,
      commentAuthor: $commentAuthor
    ) {
      _id
      questionText
      questionAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
