// Importing necessary module for GraphQL queries
import { gql } from '@apollo/client';

// GraphQL query to fetch a user profile based on username
export const QUERY_PROFILE = gql`
  query Query($username: String!) {
    profile(username: $username) {
      username
    }
  }
`;

// GraphQL query to fetch all questions
export const QUERY_QUESTIONS = gql`
  query getQuestions {
    questions {
      _id 
      questionText
      questionAuthor
      createdAt 
    }
  }
`;

// GraphQL query to fetch a single question and its comments based on question ID
export const QUERY_SINGLE_QUESTION = gql`
  query getSingleQuestion($questionId: ID!) {
    question(questionId: $questionId) {
      _id 
      questionText 
      questionAuthor
      createdAt 
      comments {
        _id 
        commentText 
        commentAuthor 
        createdAt 
      }
    }
  }
`;

// GraphQL query to fetch user information including their questions
export const QUERY_ME = gql`
  query me {
    _id 
    username 
    questions {
      _id
      questionText
      questionAuthor
      createdAt
    }
  }
`;
