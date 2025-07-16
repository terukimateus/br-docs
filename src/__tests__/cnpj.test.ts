import { Cnpj } from "../cnpj";
import { describe, it, expect } from "vitest";

describe("CNPJ Validation", () => {
  it("should validate a correct CNPJ", () => {
    expect(Cnpj.isValid("12.345.678/0001-95")).toBe(true);
  });

  it("should invalidate an incorrect CNPJ", () => {
    expect(Cnpj.isValid("12.345.678/0001-96")).toBe(false);
  });

  it("should format a CNPJ correctly", () => {
    expect(Cnpj.format("12345678000195")).toBe("12.345.678/0001-95");
  });

  it("should parse a CNPJ correctly", () => {
    expect(Cnpj.parse("12.345.678/0001-95")).toBe("12345678000195");
  });

  it("should return false for invalid CNPJ formats", () => {
    expect(Cnpj.isValid("12345678901234")).toBe(false);
    expect(Cnpj.isValid("11111111/1111-11")).toBe(false);
    expect(Cnpj.isValid("abcdefghijklmno")).toBe(false);
  });
});
