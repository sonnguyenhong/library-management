const seeder = require('mongoose-seed');
const { USER_MALE_GENDER, USER_ADMIN } = require('../constants/schema.constants');

const {db: {username, password, name}} = require('../configs/mongodb.config');

const connectString = `mongodb+srv://${username}:${password}@cluster0.iyekf6b.mongodb.net/${name}?retryWrites=true&w=majority`

const users = [
    {
        username: 'admin',
        password: 'admin',
        fullname: 'Admin',
        birthYear: '2023',
        gender: USER_MALE_GENDER,
        jobTitle: USER_ADMIN,
        phoneNumber: '0967874928',
        email: 'hustlibmanagement@gmail.com',
        functionalities: ['645d99fbb15a7cb53fd3022b', '645d99fbb15a7cb53fd3022c', 
            '645d99fbb15a7cb53fd3022f', '645d99fbb15a7cb53fd30231', '645d99fbb15a7cb53fd30230', 
            '645d99fbb15a7cb53fd3022e', '645d99fbb15a7cb53fd3022d']
    }
]

const data = [
    {
        'model': 'User',
        'documents': users
    }
]

// connect to mongodb
seeder.connect(connectString, () => {
    seeder.loadModels([
        'src/models/user.model.js'
    ]);

    seeder.clearModels(['User'], () => {
        seeder.populateModels(data, () => {
            seeder.disconnect();
        })
    })
})