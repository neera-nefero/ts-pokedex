import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "123123 ArTiCuNo  ",
        expected: ["123123", "articuno"],
    },
    {
        input: "123123ArTiCuNo a ",
        expected: ["123123articuno", "a"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});