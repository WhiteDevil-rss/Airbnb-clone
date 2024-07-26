const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = process.env.ATLASDB_URL;

main().then(() => {
    console.log('connection sucessfull');
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "669bad7f729b442672392d0d" }));
    await Listing.insertMany(initData.data);
    console.log('data was initialize..');
}

initDB();