const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://teteu:teteu@cluster0-bwebc.mongodb.net/test?retryWrites=true&w=majority')
    .then(result => {
        console.log('Connected!');
    })
    .catch(err => {
        console.log(err);
    })
};

module.exports = mongoConnect;