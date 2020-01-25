function Main(input) {
	const temps = input.split(' ');
	const product　= parseInt(temps[0],10) * parseInt(temps[1], 10);
	if(product % 2 === 0) {
		console.log('Even');
	}else {
		console.log('Odd');
	}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
