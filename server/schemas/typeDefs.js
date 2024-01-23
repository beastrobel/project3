const typeDefs = `
    type Profile{
        _id: ID!
        name: String!
        password: String
        questions:[Questions]
    }

    type Questions {
        _id: ID!
        question: String!
        answer: String
        comment: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: Profile
    }

    type Query {
        profiles: [Profile]
        profile(username: String!): Profile
        questions( username: String): [Questions]
        question(questionId: ID!): question

    }

    type Mutation {
        addProfile(username: String!, password: String!): Auth
        login( username: String!, password: String!): Auth
        addQuestion( questionText: String!, questionAuthor: String!): Question
        addComment(
            questionId: ID!
            commentText: String!
            commentAuthor: String!
        ): Question
        removeQuestion(questionId: ID!): Question
        removeComment(questionId: ID!, commentId: ID!): Question
    }
`;

module.exports = typeDefs;