"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pix_1 = require("../pix");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("pix", () => {
    (0, vitest_1.it)("should validate a valid pix", () => {
        const validPix = "123e4567-e89b-12d3-a456-426614174000";
        (0, vitest_1.expect)(pix_1.Pix.isValid(validPix)).toBe(true);
    });
    (0, vitest_1.it)("should validate a CNPJ valid pix", () => {
        const validPix = "11.222.333/0001-81";
        (0, vitest_1.expect)(pix_1.Pix.isValid(validPix)).toBe(true);
    });
    (0, vitest_1.it)("should validate a cellphone valid pix", () => {
        const validPix = "44922222333";
        (0, vitest_1.expect)(pix_1.Pix.isValid(validPix)).toBe(true);
    });
    (0, vitest_1.it)("should validate a CPF valid pix", () => {
        const validPix = "12345678909";
        (0, vitest_1.expect)(pix_1.Pix.isValid(validPix)).toBe(true);
    });
    (0, vitest_1.it)("should validate an email valid pix", () => {
        const validPix = "valid@valid.com";
        (0, vitest_1.expect)(pix_1.Pix.isValid(validPix)).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an invalid pix", () => {
        const invalidPix = "invalid-pix";
        (0, vitest_1.expect)(pix_1.Pix.isValid(invalidPix)).toBe(false);
    });
    (0, vitest_1.it)("should format a pix correctly", () => {
        const unformattedPix = "123e4567e89b12d3a456426614174000";
        (0, vitest_1.expect)(pix_1.Pix.format(unformattedPix, "uuid")).toBe("123e4567-e89b-12d3-a456-426614174000");
    });
});
