const seeder = require('mongoose-seed');

const {db: {username, password, name}} = require('../configs/mongodb.config');

const connectString = `mongodb+srv://${username}:${password}@cluster0.iyekf6b.mongodb.net/${name}?retryWrites=true&w=majority`

const functionalities = [
    {
        code: 'CN001',
        name: 'Quản trị hệ thống”'
    },
    {
        code: 'CN002',
        name: 'Quản lý tài liệu'
    },
    {
        code: 'CN003',
        name: 'Quản lý độc giả'
    },
    {
        code: 'CN004',
        name: 'Quản lý mượn, trả tài liệu'
    },
    {
        code: 'CN005',
        name: 'Tìm kiếm thông tin'
    },
    {
        code: 'CN006',
        name: 'Thống kê, báo cáo'
    },
    {
        code: 'CN007',
        name: 'In ấn'
    }
]

const data = [
    {
        'model': 'Functionality',
        'documents': functionalities
    }
]

// connect to mongodb
seeder.connect(connectString, () => {
    seeder.loadModels([
        'src/models/functionality.model.js'
    ]);

    seeder.clearModels(['Functionality'], () => {
        seeder.populateModels(data, () => {
            seeder.disconnect();
        })
    })
})