function Main(input) {
	//SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict modeになってしまうため
	"use strict"
	
	const inputStrings = input.split(' ');
	const verifyNum = parseInt(inputStrings[0] + inputStrings[1]);
	
	let answer = 'No';
	for(let i = 1; i <= 100100; i++){
		if((i * i) === verifyNum){
			answer = 'Yes';
			break;
		}
	}
	console.log(answer);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));