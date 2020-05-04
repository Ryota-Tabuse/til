var log = function (message) {
    var data = (new Data()).toISOString();
    console.log(data + ":" + message);
}