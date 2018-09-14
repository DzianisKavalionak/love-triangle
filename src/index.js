/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


var s = 0;
var b;
preferences.unshift('noname');
for (var a = 0; a < preferences.length; ++a) {
		var b = preferences[a];
		var c = preferences[b];	
        if (a === preferences[c] && b === preferences[a] && c === preferences[b] && preferences[a] !== a && preferences[b] !== b && preferences[c] !== c) {
            s++;
    };
};
return s / 3;
};
