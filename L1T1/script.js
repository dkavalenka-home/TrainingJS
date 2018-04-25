var a = 4; b = 10; c = 5; q = 0; v = 0; D = 0; x = 0;

D = (b * b) - (4 * a * c);

if (D > 0) {
	console.log("Quadratic equation have 2 roots");
		q = (-1*b + Math.sqrt(D)) / (2*a);
		console.log("if x1 = 0, then x1 =", q);
			v = (-1*b - Math.sqrt(D)) / (2*a);
			console.log("if x1 = 1, then x1 =", v);

} else if (D === 0) {
	console.log("Quadratic equation have 1 root");
		x = (-1*b) / (a*2);
		console.log(x);

} else if (D < 0) {
	console.log("Quadratic equation have no roots");
}