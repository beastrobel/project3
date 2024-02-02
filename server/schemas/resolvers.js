const { Profile, Question } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find().populate('questions');
        },
        profile: async (parent, { username }) => {
            return Profile.findOne({ username }).populate('questions');
        },
        questions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Question.find(params);
        },
        question: async (parent, { questionId }) => {
            return Question.findOne({ _id: questionId});
        },
    },

    Mutation: {
        addProfile: async (parent, {username, password}) => {
            const user = await Profile.create({ username, password});
            const token = signToken(user);
            return { token, user };
        },
        loginProfile: async (parent, { username, password }) => {
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
        addQuestion: async (parent, { questionText }, context ) => {
            if (context.user) {
                const question = await Question.create({
                    questionText,
                    questionAuthor: context.user.username,
                });

                await Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { questions: question._id }}
                );

                return question;
            }
            throw AuthenticationError;
        },
        addComment: async (parent, { questionId, commentText}, context) => {
            if(context.user) {
                return Question.findOneAndUpdate(
                    {_id: questionId},
                    {
                        $addToSet: {
                            comments: { commentText, commentAuthor: context.user.username},
                        },
                    },
                    {
                        new:true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },
        removeQuestion: async (parent, { questionId }) => {
            return Question.findOneAndDelete({ _id: questionId });
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