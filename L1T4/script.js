var a = 321;
var b = '';

while (a > 0) {
	b = b + (a % 10);
		a = parseInt (a / 10);
}
console.log("Reversed number is", b);