const { model, Schema, Types } = require('mongoose');
const bcrypt = require('bcrypt');
const { USER_COLLECTION_NAME, USER_DOCUMENT_NAME, USER_MALE_GENDER, USER_FEMALE_GENDER, USER_OTHER_GENDER, USER_ADMIN, USER_LIBRARIAN, FUNCTIONALITY_DOCUMENT_NAME } = require('../constants/schema.constants');

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            maxLength: 30,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            maxLength: 30,
        },
        fullname: {
            type: String,
        },
        birthYear: {
            type: String,
        },
        gender: {
            type: String,
            enum: [USER_MALE_GENDER, USER_FEMALE_GENDER, USER_OTHER_GENDER]
        },
        jobTitle: {
            type: String,
            enum: [USER_ADMIN, USER_LIBRARIAN]
        },
        phoneNumber: {
            type: String,
            maxLength: 12,
        },
        email: {
            type: String,
        },
        functionalities: [{
            type: Schema.Types.ObjectId,
            ref: FUNCTIONALITY_DOCUMENT_NAME
        }]
    }, 
    {
        timestamps: true,
        collection: USER_COLLECTION_NAME,
    }
);

userSchema.pre('save', async function(next) {
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }

    user.password = await bcrypt.hash(user.password, 10);
    return next();
});

module.exports = model(USER_DOCUMENT_NAME, userSchema);