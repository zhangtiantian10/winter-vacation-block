const url = require('../helps/get-url');
const MongoClient = require('../helps/mongodb');

function insertUsers(userInformation, callback) {

    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('users');

        collection.insert(userInformation, function (err, result) {
                callback(result);
            }
        );
    });
}

module.exports = insertUsers;