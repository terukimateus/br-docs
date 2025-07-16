"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telefone_1 = require("../telefone");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("Telefone Validation", () => {
    (0, vitest_1.it)("should validate a correct phone number", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.isValid("1132654321")).toBe(true);
    });
    (0, vitest_1.it)("should validate a correct phone number with DDD", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.isValid("(11) 3265-4321")).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect phone number", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.isValid("11987635432")).toBe(false);
    });
    (0, vitest_1.it)("should format a phone number correctly", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.format("1132654321")).toBe("(11) 3265-4321");
    });
    (0, vitest_1.it)("should parse a phone number correctly", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.parse("(11) 3265-4321")).toBe("1132654321");
    });
    (0, vitest_1.it)("should return false for invalid DDD phone numbers", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.isValid("(10) 3235-4099")).toBe(false);
    });
    (0, vitest_1.it)("should return false for invalid phone numbers", () => {
        (0, vitest_1.expect)(telefone_1.Telefone.isValid("12345678901")).toBe(false);
        (0, vitest_1.expect)(telefone_1.Telefone.isValid("abcdefghij")).toBe(false);
    });
});
