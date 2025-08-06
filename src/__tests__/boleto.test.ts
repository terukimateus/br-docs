import { describe, expect, it } from "vitest";
import { Boleto } from "../boleto";

describe("Boleto", () => {
  it("should validate a valid 'COBRANCA' boleto", () => {
    expect(
      Boleto.isValid("42297.11504 00064.897317 07506.739429 1 11700000010400")
    ).toBe(true);
    expect(
      Boleto.isValid("23790448095616862379336011058009740430000124020")
    ).toBe(true);
    expect(
      Boleto.isValid("42297.11504 00064.897317 04445.119722 2 11700000010392")
    ).toBe(true);
  });
  it("should validate a valid 'ARRECADACAO' boleto", () => {
    expect(
      Boleto.isValid("858900000001 234567890123 456789012345 678901234567")
    ).toBe(true);
  });
  it("should format a 'COBRANCA' boleto correctly", () => {
    expect(
      Boleto.format("42297115040006489731707506.739429 1 11700000010400")
    ).toBe("42297.11504 00064.897317 07506.739429 1 11700000010400");
  });
  it("should format a 'ARRECADACAO' boleto correctly", () => {
    expect(
      Boleto.format("858900000001234567890123456789012345678901234567")
    ).toBe("85890000000-1 23456789012-3 45678901234-5 67890123456-7");
  });
  it("should parse boleto numbers correctly", () => {
    expect(
      Boleto.parse("42297.11504 00064.897317 07506.739429 1 11700000010400")
    ).toBe("42297115040006489731707506739429111700000010400");
    expect(
      Boleto.parse("858900000001234567890123456789012345678901234567")
    ).toBe("858900000001234567890123456789012345678901234567");
  });
  it("should return false for invalid boleto numbers", () => {
    expect(
      Boleto.isValid("123456789012345678901234567890123456789012345678")
    ).toBe(false);
    expect(
      Boleto.isValid("42297.11504 00064.897317 07506.739429 1 1170000001040X")
    ).toBe(false);
    expect(
      Boleto.isValid("85890000000123456789012345678901234567890123456")
    ).toBe(false);
  });
  it("should return false for empty boleto numbers", () => {
    expect(Boleto.isValid("")).toBe(false);
  });
});
