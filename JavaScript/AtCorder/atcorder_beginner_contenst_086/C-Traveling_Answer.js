/**
 * 参考：https://qiita.com/ytanto/items/caf7bf0ba287da81b20f#%E7%AC%AC10%E5%95%8F-abc-086-c---traveling
 * input例
 * 2
 * 3 1 2
 * 6 1 1
 */
function main(input) {
	//配列に分割
	const args = input.split('\n');
	//0番目の回数を取得
	const N = parseInt(args[0], 10);
	//N以外の　連続数字の配列を取得
	const nums = args.slice(1, N + 1);//slice https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	//配列をメソッド内部で全てチェックできる
	const isValid = nums.every((n) => {//every https://qiita.com/i_am_master_yoda/items/224ff73443b4566ec8e8 
		//3文字をそれぞれに分割
        var ns = n.split(' ');
        var t = parseInt(ns[0], 10),
            x = parseInt(ns[1], 10),
			y = parseInt(ns[2], 10);
		//x,yの合計値を算出
        var sum = x + y;
		
		/**　チェック事項
		 * 1. 移動回数（t）がsum以上であるか→合計値の場合必ず到達できないため
		 * 2. 移動回数と合計値の偶奇が同じである事。
		 *	  → 条件1が満たせるという事は、たどり着けるという前提。
		 *		同じ場所に止まり続けるためには、行って戻ってくる必要があるため移動が偶数回必要になる。
		 * 　　 tが奇数=>最短での移動が奇数=>x + yは奇数  
		 * 　　 tが偶数=>最短での移動が偶数=>x + yは奇数 
		 * 			ex)5 1 2 の場合、最短で3回の移動で到達できる。残り移動回数が2であり、偶数なので行って戻ってくる事ができる
		 * 			ex)6 1 2 の場合、最短で3回の移動で到達できる。残り移動回数が3であり、奇数なので行って戻ってくる事ができない
		 * 		よって、 ((t % 2) === (sum % 2))の条件式となる
		 */
        return (t >= sum) && ((t % 2) === (sum % 2));
    });

    if (isValid) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));