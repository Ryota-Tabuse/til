function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //引数valueが未定義であるかどうかによって成否を判定
            if(value){
                resolve(`入力値${value}`)
            } else {
                reject('空です。');
            }
        },500);
    });
};

Promise.race([
    asyncProcess(''),
    asyncProcess('aaa'),
    asyncProcess('ccc'),
])
.then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー${error}`);
    }
);