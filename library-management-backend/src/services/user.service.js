const User = require('../models/user.model');

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
}

module.exports = UserService;