"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cnpj_1 = require("../cnpj");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("CNPJ Validation", () => {
    (0, vitest_1.it)("should validate a correct CNPJ", () => {
        (0, vitest_1.expect)(cnpj_1.Cnpj.isValid("12.345.678/0001-95")).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect CNPJ", () => {
        (0, vitest_1.expect)(cnpj_1.Cnpj.isValid("12.345.678/0001-96")).toBe(false);
    });
    (0, vitest_1.it)("should format a CNPJ correctly", () => {
        (0, vitest_1.expect)(cnpj_1.Cnpj.format("12345678000195")).toBe("12.345.678/0001-95");
    });
    (0, vitest_1.it)("should parse a CNPJ correctly", () => {
        (0, vitest_1.expect)(cnpj_1.Cnpj.parse("12.345.678/0001-95")).toBe("12345678000195");
    });
    (0, vitest_1.it)("should return false for invalid CNPJ formats", () => {
        (0, vitest_1.expect)(cnpj_1.Cnpj.isValid("12345678901234")).toBe(false);
        (0, vitest_1.expect)(cnpj_1.Cnpj.isValid("11111111/1111-11")).toBe(false);
        (0, vitest_1.expect)(cnpj_1.Cnpj.isValid("abcdefghijklmno")).toBe(false);
    });
});
