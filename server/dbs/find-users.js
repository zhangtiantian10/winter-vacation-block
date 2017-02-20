const url = require('../helps/get-url');
const MongoClient = require('../helps/mongodb');

function findUsers(userInformation, callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('users');
        const userName = userInformation.useName;

        collection.find({useName:userName}).toArray(function (err, result) {
            console.log(result);
            callback(result);
        });
    })
}

module.exports = findUsers;
