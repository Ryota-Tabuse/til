# 07.Assignment operator ver2

# 代入演算子（値渡し・参照渡し）

**`定数 const`**

＊定数の制約はあくまでも、「再代入できない」ことであり、「変更できない（読み取り専用）」という意味ではない。

**`基本型`**

    const TAX = 1.08;
    TAX = 1.1; // TypeError: Assignment to constant variable.

**`参照型`**

    const data = [1,2,3];
    data = [4,5,6]; //1
    data[1] = 10;　 //2
    console.log(data);

1 ではエラーが発生する。なぜなら、配列自体を再代入しているからである。

2 ではエラーは発生しない。元の配列はそのままに、内容だけを書き換えているからである。
