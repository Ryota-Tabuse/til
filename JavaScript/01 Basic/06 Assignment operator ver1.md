# 06.Assignment operator ver1

# 代入演算子(値渡し・値渡し)

`**値渡し` （基本型）number,string,boolean,symbole,null,undifiend...\*\*

    let x = 1;
    let y = x;
    x = 2;
    console.log(y); //1

値渡し、メモリに値をそのままコピーして渡してあげる。

![06%20Assignment%20operator%20ver1/Untitled.png](06%20Assignment%20operator%20ver1/Untitled.png)

値はコピー元と変わる

![06%20Assignment%20operator%20ver1/Untitled%201.png](06%20Assignment%20operator%20ver1/Untitled%201.png)

**`参照渡し` （参照型）array,object,function...**

    let data1 = [0,1,2];
    let data2 = data1;
    data1[0] =5;
    console.log(data2); //[5, 1, 2]

値ではなくメモリのアドレスをコピーして格納する。

![06%20Assignment%20operator%20ver1/Untitled%202.png](06%20Assignment%20operator%20ver1/Untitled%202.png)

よって、参照元の値が変化すると値が変わってしまう。

![06%20Assignment%20operator%20ver1/Untitled%203.png](06%20Assignment%20operator%20ver1/Untitled%203.png)
