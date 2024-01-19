const typeDefs = `
    type Profile{
        _id: ID!
        name: String!
        questions:[Questions]
    }

    type Questions {
        _id: ID!
        question: String!
        answer: String
        comment: [Comment]
    }

    type Query {
        user: [Profile]
        questions: [Questions]
    }

    type Mutation {
        createQuestion(questions:String!, _id: String!): Questions
    }
`;

module.exports = typeDefs;