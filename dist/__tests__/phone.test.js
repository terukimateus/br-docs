"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celular_1 = require("../celular");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("Phone Validation", () => {
    (0, vitest_1.it)("should validate a correct phone number", () => {
        (0, vitest_1.expect)(celular_1.Celular.isValid("11987654321")).toBe(true);
    });
    (0, vitest_1.it)("should validate a correct phone number with DDD", () => {
        (0, vitest_1.expect)(celular_1.Celular.isValid("(11) 98765-4321")).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect phone number", () => {
        (0, vitest_1.expect)(celular_1.Celular.isValid("1198765432")).toBe(false);
    });
    (0, vitest_1.it)("should format a phone number correctly", () => {
        (0, vitest_1.expect)(celular_1.Celular.format("11987654321")).toBe("(11) 98765-4321");
    });
    (0, vitest_1.it)("should parse a phone number correctly", () => {
        (0, vitest_1.expect)(celular_1.Celular.parse("(11) 98765-4321")).toBe("11987654321");
    });
    (0, vitest_1.it)("should return false for invalid ddd phone numbers", () => {
        (0, vitest_1.expect)(celular_1.Celular.isValid("(10) 99835-4099")).toBe(false);
    });
    (0, vitest_1.it)("should return false for invalid phone numbers", () => {
        (0, vitest_1.expect)(celular_1.Celular.isValid("12345678901")).toBe(false);
        (0, vitest_1.expect)(celular_1.Celular.isValid("abcdefghij")).toBe(false);
    });
});
