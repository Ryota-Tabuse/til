const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://user:password@localhost:27017/sample";

const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

MongoClient.connect(url, connectOption, (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    const db = client.db("sample");
    var bulk = db.collection("products").initializeOrderedBulkOp();
    bulk.insert({ name: "pen", price: 120});
    bulk.insert({ name: "note", price: 120});
    bulk.insert({ name: "easter", price: 100});
    bulk.insert({ name: "paste", price: 180});
    bulk.insert({ name: "ciseaux", price: 320});
    bulk.insert({ name: "cellophane tape", price: 80});
    bulk.execute((err, result) => {
        client.close();
    });
});
