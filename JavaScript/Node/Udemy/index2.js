var Animal = function () {
    this.message = 'hoge';
}
var util = {};

//
util.inherits = function (child, parent) {
    child.prototype = parent.prototype;
    child.prototype.constructor = parent;
}

util.base = function (self, ...args) {
    console.log(Object.getPrototypeOf(self));
    var prototype = Object.getPrototypeOf(self);
    prototype.constructor.apply(self, args);
}

Animal.prototype = {
    message: "........",
    say: function() {
        return this.message;
    }
};

// var Dog = function () {
//     this.message = "わんわん";
// }
var Dog = function() {
    util.base(this);
    this.message = "わんわん";
}
util.inherits(Dog, Animal);


var dog = new Dog();
