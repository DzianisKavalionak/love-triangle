/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


var s = 0;
preferences.unshift('noname');
for (var a = 0; a < preferences.length; ++a) {
    for (var b = 0; b < preferences.length; ++b) {
        for (var c = 0; c < preferences.length; ++c) {

            if (a === preferences[b] && b === preferences[c] && c === preferences[a] && preferences[a] !== a && preferences[b] !== b && preferences[c] !== c) {

                s = (s + +1);
                
            };
        };
    };
};
s = s / 3;
return s;
};
