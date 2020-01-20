# 08.Equality operator（==）と（===）

JavaScriptの等価演算子(==)は注意が必要。
データ型が異なる場合にもデータ型を変換して、「なんとか等しいとみなせないか」試みる。

    console.log(1 == true);    //true
    console.log('0x10' == 16); //true　16進数表現と捉えられ等しいとみなされる。
    console.log('1' == 1);     //true

厳密に比較したい場合は、同値演算子を使用する。

    console.log(1 === true);    //false
    console.log('0x10' === 16); //false
    console.log('1' === 1);     //false

JavaScriptは型を持たないわけではない。
この寛容さはかえってバグにつながることのほうが多いため、
比較には**同値演算子(===)**を使用すべきである。