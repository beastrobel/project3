import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
 query Query($username: String!) {
     profile(username: $username) {
        username
        }
    }
`;

export const QUERY_QUESTIONS = gql`
    query getQuestions {
        questions {
            _id 
            questionText
            questionAuthor
            comments {
                _id
                commentText
                commentAuthor
            }
        }
    }
`;

export const QUERY_SINGLE_QUESTION = gql`
    query getSingleQuestion($questionId: ID!) {
        question(questionId: $questionId) {
            _id 
            questionText 
            questionAuthor
            comments {
                _id 
                commentText 
                commentAuthor
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
        }
    }
`;