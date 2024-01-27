import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
 query Query($username: String!) {
     profile(username: $username) {
        _id
        username
        questions {
            _id
            questionText
            questionAuthor
            createdAt
            }
        }
    }
`;

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