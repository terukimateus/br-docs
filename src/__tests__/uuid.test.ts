import { Uuid } from "../uuid";
import { describe, it, expect } from "vitest";

describe("UUID", () => {
  it("should validate a correct UUID", () => {
    const validUuid = "123e4567-e89b-12d3-a456-426614174000";
    expect(Uuid.isValid(validUuid)).toBe(true);
  });

  it("should invalidate an incorrect UUID", () => {
    const invalidUuid = "123e4567-e89b-12d3-a456-42661417400z";
    expect(Uuid.isValid(invalidUuid)).toBe(false);
  });

  it("should format a UUID correctly", () => {
    const unformattedUuid = "123e4567e89b12d3a456426614174000";
    expect(Uuid.format(unformattedUuid)).toBe(
      "123e4567-e89b-12d3-a456-426614174000"
    );
  });

  it("should parse a formatted UUID", () => {
    const formattedUuid = "123e4567-e89b-12d3-a456-426614174000";
    expect(Uuid.parse(formattedUuid)).toBe("123e4567e89b12d3a456426614174000");
  });
});
