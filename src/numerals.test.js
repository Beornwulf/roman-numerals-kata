import {arabicToRoman} from "./numerals";

describe.each([
    [1, "I"]
])("correctly translates %i to numerals", (a, expected) => {
    test(`returns ${expected}`, () => {
        expect(arabicToRoman(a)).toBe(expected);
    });
});