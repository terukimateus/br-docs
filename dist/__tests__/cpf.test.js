"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = require("../cpf");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("CPF Validation", () => {
    (0, vitest_1.it)("should validate a correct CPF", () => {
        (0, vitest_1.expect)(cpf_1.Cpf.isValid("12345678909")).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect CPF", () => {
        (0, vitest_1.expect)(cpf_1.Cpf.isValid("12345678900")).toBe(false);
    });
    (0, vitest_1.it)("should format a CPF correctly", () => {
        (0, vitest_1.expect)(cpf_1.Cpf.format("12345678909")).toBe("123.456.789-09");
    });
    (0, vitest_1.it)("should parse a CPF correctly", () => {
        (0, vitest_1.expect)(cpf_1.Cpf.parse("123.456.789-09")).toBe("12345678909");
    });
    (0, vitest_1.it)("should return false for blacklisted CPFs", () => {
        const blacklistedCPFs = [
            "00000000000",
            "11111111111",
            "22222222222",
            "33333333333",
            "44444444444",
            "55555555555",
            "66666666666",
            "77777777777",
            "88888888888",
            "99999999999",
        ];
        blacklistedCPFs.forEach((cpfBlacklist) => {
            (0, vitest_1.expect)(cpf_1.Cpf.isValid(cpfBlacklist)).toBe(false);
        });
    });
});
