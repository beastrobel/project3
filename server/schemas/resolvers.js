const { Profile, Questions} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find().populate('questions');
        },
        profile: async (parent, { userName }) => {
            return Profile.findOne({ userName }).populate('questions');
        },
        questions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Question.find(params).sort({ createdAt: -1 });
        },
        question: async (parent, { questionId }) => {
            return Question.findOne({ _id: questionId});
        },
    },

    Mutations: {
        addUser: async (parent, {username, password}) => {
            const user = await Profile.create({ username, password});
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await Profile.findOne({ username });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addQuestion: async (parent, { question, author }) => {
            const quest = await Question.create({ question, author });

            await Profile.findOneAndUpdate(
                { username: author },
                { $addToSet: { questions: question.id }}
            );

            return question;
        },
        addComment: async (parent, { questionId, commentText, commentAuthor }) => {
            return Question.findOneAndUpdate(
                { _id: questionId },
                {
                    $addToSet: { comments: { commentText, commentAuthor }},
                },
                {
                    new:tyue,
                    runValidators: true,
                }
            );
        },
        removeQuestion: async (parent, { QuestionId }) => {
            return Question.findOneAndDelete({ _id: thoughtId });
        },
        removeComment: async (parent, { questionId, commentId }) => {
            return Question.findOneAndUpdate(
                { _id: questionId },
                { $pull: { comments: { _id: commentId }}},
                { new:true }
            );
        },
    },
};

module.exports = resolvers;