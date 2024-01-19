const { Schema, model } = require('mongoose');
const bcrypt = requre('bcrypt');

const profileSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        match: [/!@#\$%\^&\*()_+-=[]\|;':",.<>/, 'Must contain a special character'],
    },
    questions:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
});

profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;


