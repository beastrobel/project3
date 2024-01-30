const typeDefs = `
    type Profile{
        _id: ID!
        username: String!
        password: String
        questions:[Question]
    }

    type Question{
        _id: ID!
        questionText: String!
        questionAuthor: String
        comments: [Comment]
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
        profile( username: String! ): Profile
        questions( username: String ): [Question]
        question( questionId: ID! ): Question

    }

    type Mutation {
        addProfile( username: String!, password: String! ): Auth
        loginProfile( username: String!, password: String! ): Auth
        addQuestion( questionText: String!): Question
        addComment(questionId: ID!, commentText: String!): Question
        removeQuestion( questionId: ID! ): Question
        removeComment( questionId: ID!, commentId: ID! ): Question
    }
`;

module.exports = typeDefs;