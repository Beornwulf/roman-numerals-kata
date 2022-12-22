import {arabicToRoman} from "./numerals";

describe.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [ 6,"VI"],
    [ 7,"VII"],
    [ 8,"VIII"],
    [ 9,"IX"],
])("correctly translates %i to numerals", (a, expected) => {
    test(`returns ${expected}`, () => {
        expect(arabicToRoman(a)).toBe(expected);
    });
});