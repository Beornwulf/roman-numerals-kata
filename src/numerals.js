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
    if (!Number.isInteger(number)) {
        return false;
    }
    if (number < 1) {
        return false;
    }
    let output = "";
    while (number >= 50) {
        number -= 50;
        output += "L";
    }
    while (number >= 40) {
        number -= 40;
        output += "XL";
    }
    while (number >= 10) {
        number -= 10;
        output += "X";
    }
    while (number >= 9) {
        number -= 9;
        output += "IX";
    }
    while (number >= 5) {
        number -= 5;
        output += "V";
    }
    while (number >= 4) {
        number -= 4;
        output += "IV";
    }
    while (number >= 1) {
        number--;
        output += "I";
    }
    return output;
}

module.exports = {
    arabicToRoman
}