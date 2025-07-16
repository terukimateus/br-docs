import { Cpf } from "../cpf";

import { describe, expect, it } from "vitest";

describe("CPF Validation", () => {
  it("should validate a correct CPF", () => {
    expect(Cpf.isValid("12345678909")).toBe(true);
  });

  it("should invalidate an incorrect CPF", () => {
    expect(Cpf.isValid("12345678900")).toBe(false);
  });

  it("should format a CPF correctly", () => {
    expect(Cpf.format("12345678909")).toBe("123.456.789-09");
  });

  it("should parse a CPF correctly", () => {
    expect(Cpf.parse("123.456.789-09")).toBe("12345678909");
  });

  it("should return false for blacklisted CPFs", () => {
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
      expect(Cpf.isValid(cpfBlacklist)).toBe(false);
    });
  });
});
