"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cep_1 = require("../cep");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("CEP Validation", () => {
    (0, vitest_1.it)("should validate a correct CEP", () => {
        (0, vitest_1.expect)(cep_1.Cep.isValid("12345678")).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect CEP", () => {
        (0, vitest_1.expect)(cep_1.Cep.isValid("12345-6799")).toBe(false);
    });
    (0, vitest_1.it)("should format a CEP correctly", () => {
        (0, vitest_1.expect)(cep_1.Cep.format("12345678")).toBe("12345-678");
    });
    (0, vitest_1.it)("should parse a CEP correctly", () => {
        (0, vitest_1.expect)(cep_1.Cep.parse("12345-678")).toBe("12345678");
    });
    (0, vitest_1.it)("should return false for invalid CEP formats", () => {
        (0, vitest_1.expect)(cep_1.Cep.isValid("123495678")).toBe(false);
        (0, vitest_1.expect)(cep_1.Cep.isValid("abcdefgh")).toBe(false);
    });
});
