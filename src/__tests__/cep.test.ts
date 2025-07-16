import { Cep } from "../cep";
import { describe, it, expect } from "vitest";

describe("CEP Validation", () => {
  it("should validate a correct CEP", () => {
    expect(Cep.isValid("12345678")).toBe(true);
  });

  it("should invalidate an incorrect CEP", () => {
    expect(Cep.isValid("12345-6799")).toBe(false);
  });

  it("should format a CEP correctly", () => {
    expect(Cep.format("12345678")).toBe("12345-678");
  });

  it("should parse a CEP correctly", () => {
    expect(Cep.parse("12345-678")).toBe("12345678");
  });

  it("should return false for invalid CEP formats", () => {
    expect(Cep.isValid("123495678")).toBe(false);
    expect(Cep.isValid("abcdefgh")).toBe(false);
  });
});
