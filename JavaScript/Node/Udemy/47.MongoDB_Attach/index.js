const MongoClient = require("mongodb").MongoClient;
const async = require('async');

const url = "mongodb://127.0.0.1:27017/myDB";

const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

MongoClient.connect(url, connectOption, (error, client) => {
    var db = client.db("sample");
    db.collection("products", (error, collection) => {
        collection.deleteMany(
            {name: /e/g },
            (error, result) => {
                client.close();
            }
        );
    });
});
