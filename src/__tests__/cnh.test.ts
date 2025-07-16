import { Cnh } from "../cnh";
import { describe, it, expect } from "vitest";

describe("CNH Validation", () => {
  it("should validate a correct CNH", () => {
    expect(Cnh.isValid("12345678900")).toBe(true);
  });

  it("should invalidate an incorrect CNH", () => {
    expect(Cnh.isValid("12345678901")).toBe(false);
  });

  it("should format a CNH correctly", () => {
    expect(Cnh.format("12345678900")).toBe("123.456.789-00");
  });

  it("should parse a CNH correctly", () => {
    expect(Cnh.parse("123.456.789-00")).toBe("12345678900");
  });

  it("should return false for invalid CNH formats", () => {
    expect(Cnh.isValid("1234567890")).toBe(false);
    expect(Cnh.isValid("abcdefghijklmno")).toBe(false);
  });
});
