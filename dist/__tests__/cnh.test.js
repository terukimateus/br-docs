"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cnh_1 = require("../cnh");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("CNH Validation", () => {
    (0, vitest_1.it)("should validate a correct CNH", () => {
        (0, vitest_1.expect)(cnh_1.Cnh.isValid("12345678900")).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect CNH", () => {
        (0, vitest_1.expect)(cnh_1.Cnh.isValid("12345678901")).toBe(false);
    });
    (0, vitest_1.it)("should format a CNH correctly", () => {
        (0, vitest_1.expect)(cnh_1.Cnh.format("12345678900")).toBe("123.456.789-00");
    });
    (0, vitest_1.it)("should parse a CNH correctly", () => {
        (0, vitest_1.expect)(cnh_1.Cnh.parse("123.456.789-00")).toBe("12345678900");
    });
    (0, vitest_1.it)("should return false for invalid CNH formats", () => {
        (0, vitest_1.expect)(cnh_1.Cnh.isValid("1234567890")).toBe(false);
        (0, vitest_1.expect)(cnh_1.Cnh.isValid("abcdefghijklmno")).toBe(false);
    });
});
