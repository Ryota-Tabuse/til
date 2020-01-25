function Main(input) {
	var aaa = "AAA";
	var bObject = { str: "bbb", id: 1 }; 
	console.info("aaa Text is", aaa, ". The bObject is:", bObject);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));