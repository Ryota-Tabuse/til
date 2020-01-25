# 10.Console.log()

[参考][https://qiita.com/chihiro/items/08ca81cf4dd7bcd495a4](https://developer.mozilla.org/ja/docs/Web/API/console#Outputting_text_to_the_console)

[参考][https://developer.mozilla.org/ja/docs/Web/API/console#Outputting_text_to_the_console](https://developer.mozilla.org/ja/docs/Web/API/console#Outputting_text_to_the_console)

### オブジェクトの出力

文字列とオブジェクトを連結すると、Object objectのような形で出力されてしまう。
下記のように、console.logに引数として渡してあげることで出力する事が可能になる。

    var aaa = "AAA";
    var bObject = { str: "bbb", id: 1 }; 
    console.info("aaa Text is", aaa, ". The bObject is:", bObject);
    //aaa Text is AAA . The bObject is: { str: 'bbb', id: 1 }

### 文字列置換

- %o or %O
JavaScriptでオブジェクトを出力
- %d or %i
整数値の出力を行う。下記例では、先頭に 0 を補った有効数字 2 桁の数値として出力します。

    console.log("Foo %.2d", 1.1);
    //Foo 01

- %s
文字列の出力を行う
- %f
浮動小数点数値を出力

    console.log("Foo %.2f", 1.1);
    //Foo 1.10

ex)

    for (var i=0; i<5; i++) {
      console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
    }
    /*
     * Hello, Bob. You've called me 1 times.
     * Hello, Bob. You've called me 2 times.
     * Hello, Bob. You've called me 3 times.
     * Hello, Bob. You've called me 4 times.
     * Hello, Bob. You've called me 5 times.
     */