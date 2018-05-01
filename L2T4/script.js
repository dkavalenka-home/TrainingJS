var string = "lemon, melon";
var anagrams = string.split(", ");

for (var i = 0; i < anagrams.length; i++) {
	var anagram1 = anagrams[i];
    	var alphaRow = anagram1.split("").sort().join("");

for (var j = 0; j < anagrams.length; j++) {
	if (i === j) {
    	continue;
    }

var anagram2 = anagrams[j];
	if (alphaRow === anagram2.split("").sort().join("")){
		console.log(true);
    		} else {
    			console.log(false);
    		}
}
}