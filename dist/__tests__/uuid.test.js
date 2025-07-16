"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("../uuid");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("UUID", () => {
    (0, vitest_1.it)("should validate a correct UUID", () => {
        const validUuid = "123e4567-e89b-12d3-a456-426614174000";
        (0, vitest_1.expect)(uuid_1.Uuid.isValid(validUuid)).toBe(true);
    });
    (0, vitest_1.it)("should invalidate an incorrect UUID", () => {
        const invalidUuid = "123e4567-e89b-12d3-a456-42661417400z";
        (0, vitest_1.expect)(uuid_1.Uuid.isValid(invalidUuid)).toBe(false);
    });
    (0, vitest_1.it)("should format a UUID correctly", () => {
        const unformattedUuid = "123e4567e89b12d3a456426614174000";
        (0, vitest_1.expect)(uuid_1.Uuid.format(unformattedUuid)).toBe("123e4567-e89b-12d3-a456-426614174000");
    });
    (0, vitest_1.it)("should parse a formatted UUID", () => {
        const formattedUuid = "123e4567-e89b-12d3-a456-426614174000";
        (0, vitest_1.expect)(uuid_1.Uuid.parse(formattedUuid)).toBe("123e4567e89b12d3a456426614174000");
    });
});
