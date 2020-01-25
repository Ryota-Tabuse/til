# 01.Variable[ES2015]

**`let`**

もともとvarがあったが、letが追加になった。
ES2015より、letを使用した変数定義が利用可能になった。

・変数の重複を許可しない。

    var temp1 = 'aaa';
    var temp1 = 'bbb';
    console.log(temp1); //bbb
    
    let temp2 = 'aaa';
    let temp2 = 'bbb';
    console.log(temp2); //エラー

・ブロックスコープを認識する。

    //varで定義
    var a = 100;
    if(true){
    	var b = 100;
    	console.log(a, b); //100:100
    }
    console.log(a, b); //100:100
    
    //letで定義
    let a = 100;
    if(true){
    	let b = 100;
    	console.log(a + ':' + b); //100:100 
    }
    console.log(a + ':' + b);　//ReferenceError: b is not defined

**`const`**

    const TAX = 1.10;
    TAX = 1.08; //Assignment to constant variable

・マジックナンバー（人間などには意味をなさない文字）1.08などは意味を持たない
→それは税率なのか値上げ率なのか？

・同じ値が何回も登場する

そんなときには値を変更することが出来ないconstを使用する。
定数の文字定義は、大文字、アンダースコア表記すべき。
ex)USER_NAMEやTAX

**`undifined`**

定義のみしている場合には、中身はundifinedになる。

nullとの使い分けは下記が推奨。

    nullは意図した空
    undifinedは意図しない空