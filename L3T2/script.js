// Previous one

/*var arr = [-1, -2, 1, 3, 5, 9];

var posArr = arr.filter(function(item) {
  return item > 0;
});
var negArr = arr.filter(function(item) {
  return item < 0;
});

console.log(posArr);
console.log(negArr);*/

// ES-2015

const arr = [-1, -2, 1, 3, 5, 9];

const posArr = arr.filter(item => item > 0);
	console.log(posArr);
const negArr = arr.filter(item => item < 0);
	console.log(negArr);

// Previous one

/*var arr =  [1, 2, 1, 2, 3.14, 4, 2, 1];
var result = {};

arr.forEach(function(item) {
  if (result[item] != undefined)
    result[item]++;
      else
        result[item] = 1;
});
for (var key in result)
  console.log('Number', key, ' - ', result[key], 'time(s)');*/

// ES-2015

const arr = [1, 2, 1, 2, 3.14, 4, 2, 1]; 
let result = {}; 

arr.forEach(item => result[item] = result[item] ? ++result[item] : 1); 

for (let key in result) 
	console.log('Number', key, ' - ', result[key], 'time(s)');