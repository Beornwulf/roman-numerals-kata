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
    const numerals = {
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };
    let output = "";
    for (const [numeral, value] of Object.entries(numerals)) {
        while (number >= value) {
            number -= value;
            output += numeral;
        }
    }
    return output;
}

module.exports = {
    arabicToRoman
}