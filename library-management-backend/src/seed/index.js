const user = require('./userSeeder');
// const functionality = require('./functionalitySeeder');

async function dbseed() {
    // await functionality();
    await user();
    console.log('Seed data successfully!');
}