import { Email } from "../email";
import { describe, it, expect } from "vitest";

describe("Email", () => {
  it("should validate a correct email", () => {
    const validEmail = "valid@valid.com";
    expect(Email.isValid(validEmail)).toBe(true);
  });
  it("should invalidate an incorrect email", () => {
    const invalidEmail = "invalid-email";
    expect(Email.isValid(invalidEmail)).toBe(false);
  });
});
