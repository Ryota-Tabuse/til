# 09.Logical Operator(Falsy)

# 論理演算子(falsy な値)

JavaScript では、以下の値は暗黙的に**false**とみなされます。
・空文字（''）
・数値の 0、NaN（Not a Number）
・null、undefined

逆に、これら以外は**true**となる。

下記は、案件で使用している記述方法です。
エラーコードが入っていたらエラー処理をするという動き

    let errorCode = '9'; //8でも7でも
    if(errorCode) {
    	console.log('エラー処理');
    }
