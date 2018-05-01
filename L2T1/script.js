var arr = [-1, -2, 1, 3, 5, 9];

var positiveArr = [];
var negativeArr = [];

for (var i = 0; i <arr.length; i++) {
	if (arr[i] > 0) {
		positiveArr.push(arr[i]);
	} else {
		negativeArr.push(arr[i]);
	}
}

console.log(positiveArr);
console.log(negativeArr);