//L2T1 using function 

var arr = [-1, -2, 1, 3, 5, 9];

var posArr = arr.filter(function(item) {
  return item > 0;
});
var negArr = arr.filter(function(item) {
  return item < 0;
});
console.log(posArr);
console.log(negArr);

//L2T2 using function

var arr =  [1, 2, 1, 2, 3.14, 4, 2, 1];
var result = {};

arr.forEach(function(item){
  if (result[item] != undefined)
    result[item]++;
      else
        result[item] = 1;
});
for (var key in result)
  console.log('Number', key, ' - ', result[key], 'time(s)');