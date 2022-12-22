/**
 * Translates a provided positive integer into roman numerals.
 *
 * Numerals available:
 * - I: 1
 * - V: 5
 * - X: 10
 * - L: 50
 * - C: 100
 * - D: 500
 * - M: 1000
 *
 * @param number - the required number as a positive integer
 * @returns string - the formatted roman numerals
 */
function arabicToRoman(number) {
    let output = "";
    while (number > 4) {
        number -= 5;
        output += "V";
    }
    while (number > 3) {
        number -= 4;
        output += "IV";
    }
    while (number > 0) {
        number--;
        output += "I";
    }
    return output;
}

module.exports = {
    arabicToRoman
}