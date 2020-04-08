var express = require("express");
var app = express();
//ルーティング
app.get("/",(req,res) => {
    res.status(200).send("Hello World.");
});

app.listen(3000);