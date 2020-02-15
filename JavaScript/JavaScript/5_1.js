//JSのクラスである。
let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
};

//インスタンスかもできる。
let mem = new Member('Ryota', 'Tabuse');
console.log(mem.getName());

/* 5.1.4 */
let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let mem = new Member('Ryota', 'Tabuse');
mem.getName  = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());

let mem2 = new Member('太郎', '吉田');
console.log(mem2.getName());
//TypeError: mem2.getName is not a function
//->memのインスタンスにメソッドを追加しているため、mem2にはgetNameメソッドは存在しないのである。

//Javaなどと違い、インスタンス化した後にプロパティを変更できるため、
//プロトタイプ型のJavaScriptでは、縛りが弱いクラスなのである。

/** 5.1.5 文脈によって中身が変化する変数 [this]*/

const data = 'Global data';
const obj1 = { data: 'obj1 data'};
const obj2 = { data: 'obj2 data'};

function hoge() {
    console.log(this.data);
}

hoge.call(null); //結果：Global data
hoge.call(obj1); //結果：obj1 data
hoge.call(obj2); //結果：obj2 data
/**
 * callは関数がもつメソッドで、関数を呼び出す。
 * 引数で渡したものをthisで参照する。
 */

/** 補足 配列ライクなオブジェクトを配列に変換する */
function hoge() {
    // var args = Array.prototype.slice.call(arguments);
    console.log(arguments);
    //argumentsを配列に変換。
    const args = Array.from(arguments);
    console.log(args.join('／'));
}

hoge('Angular', 'React', 'Backbone');

/** 5.1.6 コンストラクターの強制的な呼び出し */
const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const m = Member('権兵衛', '佐藤');
console.log(m);
console.log(firstName); //グローバルオブジェクトなのでアクセスできる
console.log(m.firstName); //エラー
//↓
//
const Member = function(firstName, lastName) {
    if(!(this instanceof Member)) {
        return new Member(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}

const m = Member('権兵衛', '佐藤');
console.log(m); //Member { firstName: '権兵衛', lastName: '佐藤' }
console.log(m.firstName); //権兵衛

/**
 * 要するに、newせずにメソッドとして呼ばれてしまった場合、インスタンス化して返却してあげるということ。
 */

 /**
  * Javaなどと比べると緩い。バグの温床になりかねないと感じる。
  */
