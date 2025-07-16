"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../email");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("Email", () => {
    (0, vitest_1.it)("should validate a correct email", () => {
        const validEmail = "valid@valid.com";
        (0, vitest_1.expect)(email_1.Email.isValid(validEmail)).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect email", () => {
        const invalidEmail = "invalid-email";
        (0, vitest_1.expect)(email_1.Email.isValid(invalidEmail)).toBe(false);
    });
});
