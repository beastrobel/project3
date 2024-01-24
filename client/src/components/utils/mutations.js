import { gql } from '@apollo/client';

export const LOGIN_PROFILE = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            idToken
            profile {
                _id
                userName
            }
        }
    }
`;

export const ADD_PROFILE = gql`
    mutation addProfile($username: String!, $password: String!) {
        addProfile(username: $username, password: $password) {
            token
            profile {
                _id
                userName
            }
        }
    }
`;

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

export const ADD_COMMENT = gql`
    mutation addComment($questionId: ID!, $commentText:: String!, $commentAuthor: String!) {
        addComment(
            questionId: $questionId
            commentTest: $commentText
            commentAuthor: $commentAuthor)
                {
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