var a =  [1, 2, 1, 2, 3.14, 4, 2, 1];
result = { };

for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    		++result[a[i]];
}
console.log(result);