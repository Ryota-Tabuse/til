const {CONNECTION_URL, OPTIONS, DATABASE} = require('../config/mongodb.config');
const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/*', (req, res) => {
    //DB接続
    MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
        const db = client.db(DATABASE);
        // 検索
        db.collection('posts').findOne({
            url: req.url
        }).then((doc) => {
            res.render('./posts/index.ejs', doc);
        }).catch((error) => {
            throw error;
        }).then(() => {
            client.close();
        });
    });
});

module.exports = router;
