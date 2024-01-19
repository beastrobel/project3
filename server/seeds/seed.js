const db = require('../config/connection');
const { Profile, Question } = require('../models');
const cleanDB = require('./cleanDB');

const data = require('./data.json');

db.once('open', async () => {
    await cleanDB('Profile', 'profiles');

    await cleanDB('Comment', 'comments');

    await cleanDB('Question', 'Questions');

    await Profile.create(profileSeeds);

    for (let i = 0; i < questionSeeds.length; i++) {
        const { _id, questionAuthor, question} = await Question.create(questionSeeds[i]);
        const profile = await Profile.findOneAndUpdate(
            { }
        )
        
    }
})