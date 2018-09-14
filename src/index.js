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

            if (a === preferences[b] && b === preferences[c] && c === preferences[a]) {

                s = (s + +1);
                console.log(a, b, c);
            };
        };
    };
};
s = s / 3;
return s;
};
