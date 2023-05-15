const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { getInfoData } = require('../utils');

class UserService {
    static findByUsername = async ({
        username, 
        select = {
            username: 1,
            password: 1,
            fullname: 1,
            birthYear: 1,
            gender: 1,
            jobTitle: 1,
            phoneNumber: 1,
            email: 1,
            functionalities: 1
        }
    }) => {
        return await User.findOne({ username }).select(select).lean();
    }

    static findAll = async () => {
        return await User.find({}).select('-password').lean();
    }

    static findById = async (userId) => {
        return await User.findById(userId).select('-password').lean();
    }

    static create = async ({
        username, 
        password,
        fullname,
        birthYear,
        gender,
        jobTitle,
        phoneNumber,
        email,
        functionalities
    }) => {
        const newUser = await User.create({
            username, 
            password,
            fullname,
            birthYear,
            gender,
            jobTitle,
            phoneNumber,
            email,
            functionalities
        });
        
        return getInfoData({
            fields: ['username', 'fullname', 'birthYear', 'gender', 'jobTitle', 'phoneNumber', 'email', 'functionalities'],
            object: newUser
        });
    }

    static update = async (userId, bodyUpdate) => {
        if(bodyUpdate.password) {
            bodyUpdate.password = await bcrypt.hash(bodyUpdate.password, 10);
        }
        return await User.findByIdAndUpdate(userId, bodyUpdate).select('-password');
    }

    static remove = async (userId) => {
        return await User.findByIdAndRemove(userId).select('-password');
    }
}

module.exports = UserService;