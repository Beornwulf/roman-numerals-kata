import {arabicToRoman} from "./numerals";

describe.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [12, "XII"],
    [13, "XIII"],
    [14, "XIV"],
    [15, "XV"],
    [16, "XVI"],
    [17, "XVII"],
    [18, "XVIII"],
    [19, "XIX"],
    [20, "XX"],
])("correctly translates %i to numerals", (a, expected) => {
    test(`returns ${expected}`, () => {
        expect(arabicToRoman(a)).toBe(expected);
    });
});

describe(`correctly rejects non-positive integer parameters`, () => {
    test(`returns falsy for 0`, () => {
        expect(arabicToRoman(0)).toBeFalsy();
    });
    test(`returns falsy for "1"`, () => {
        expect(arabicToRoman("1")).toBeFalsy();
    });
});