// const user = require('./userSeeder');
// const functionality = require('./functionalitySeeder');
const author = require('./authorSeeder');
const category = require('./categorySeeder');
const department = require('./departmentSeeder');
const language = require('./languageSeeder');
const publisher = require('./publisherSeeder');

async function dbseed() {
    // await functionality();
    // await user();
    await author();
    await category();
    await department();
    await language();
    await publisher();
    console.log('Seed data successfully!');
}

dbseed();