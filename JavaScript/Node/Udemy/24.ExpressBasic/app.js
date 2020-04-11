var express = require("express");
var app = express();
//ルーティング
// app.get("/user/:id?",(req,res) => {
//     console.log(req.params.id);
//     res.status(200).send("OK");
// });
app.use("/user", require("./router/user.js"));

app.listen(3000);