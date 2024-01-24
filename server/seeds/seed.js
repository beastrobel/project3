const db = require('../config/connection');
const { Profile, Question } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const questionSeeds = require('./questionSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try{
        await cleanDB('Profile', 'profiles');

        await cleanDB('Question', 'questions');

        await Profile.create(profileSeeds);

        for (let i = 0; i < questionSeeds.length; i++) {
            const { _id, questionAuthor} = await Question.create(questionSeeds[i]);
            const profile = await Profile.findOneAndUpdate(
                { username: questionAuthor },
                {
                    $addToSet: {
                        questions: _id,
                }
            }
        );        
    }
} catch(err) {
    console.error(err);
    process.exit(1);
}

console.log('ALL DONE!');
process.exit(0);
});