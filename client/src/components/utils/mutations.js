import { gql } from '@apollo/client';

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

export const ADD_QUESTION = gql`
    mutation addQuestion($questionText: String!) {
        addQuestion(questionText: $questionText) {
            _id
            questionText
            questionAuthor
            comments {
                _id
                commentText
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($questionId: ID!, $commentText: String!) {
        addComment(
            questionId: $questionId
            commentText: $commentText)
                {
                _id
                questionText
                questionAuthor
                comments {
                    _id
                    commentText
                }
            }
        }
    `;