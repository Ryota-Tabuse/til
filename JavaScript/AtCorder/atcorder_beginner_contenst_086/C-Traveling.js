/**
 * 問題：https://atcoder.jp/contests/abc086/tasks/arc089_a
 * 実行時間かかりすぎてしまいアウト
 * C-Traveling_Answerで他の方のコードを学ぶ
 * 課題を簡素化し、コード化する。
 */

function Main(input) {
	"use strict"
	const strings = input.split('\n');

	let finalAnswer = 'Yes';
	for(let i = 1; i <= parseInt(strings[0]); i++) {
		const ans = strings[i].split(' ');
		const ansTime = parseInt(ans[0]);
		const ansX = parseInt(ans[1]);
		const ansY = parseInt(ans[2]);

		//yが一度でも揃ったらフラグを立てる
		let yFlag = false;
		let x = 0;
		let y = 0;
		for(let j = 0; j < ansTime; j++) {
			//先にxを合わせる
			if(x !== ansX){
				x++;
			}//残りの回数でyを合わせにいく
			else {
				//yが一度も合っていない場合は、yにプラスしていく
				if(!yFlag){
					y++;
					if(y === ansY){
						yFlag = true;
					}
					continue;
				}
				//yが一度でも合っていた場合は、残り回数でぴったりになるかチェック
				if(yFlag && y !== ansY){
					y++;
				}else{
					y--;
				}
			}
		}

		if(x !== ansX || y !== ansY){
			finalAnswer = 'No';
		}
	}

	console.log(finalAnswer);
}

Main(require('fs').readFileSync('/dev/stdin','utf8'));