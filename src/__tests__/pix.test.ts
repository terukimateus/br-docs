import { Pix } from "../pix";
import { describe, it, expect } from "vitest";

describe("pix", () => {
  it("should validate a valid pix", () => {
    const validPix = "123e4567-e89b-12d3-a456-426614174000";
    expect(Pix.isValid(validPix)).toBe(true);
  });

  it("should validate a CNPJ valid pix", () => {
    const validPix = "11.222.333/0001-81";
    expect(Pix.isValid(validPix)).toBe(true);
  });

  it("should validate a cellphone valid pix", () => {
    const validPix = "44922222333";
    expect(Pix.isValid(validPix)).toBe(true);
  });

  it("should validate a CPF valid pix", () => {
    const validPix = "12345678909";
    expect(Pix.isValid(validPix)).toBe(true);
  });

  it("should validate an email valid pix", () => {
    const validPix = "valid@valid.com";
    expect(Pix.isValid(validPix)).toBe(true);
  });

  it("should invalidate an invalid pix", () => {
    const invalidPix = "invalid-pix";
    expect(Pix.isValid(invalidPix)).toBe(false);
  });

  it("should format a pix correctly", () => {
    const unformattedPix = "123e4567e89b12d3a456426614174000";
    expect(Pix.format(unformattedPix, "uuid")).toBe(
      "123e4567-e89b-12d3-a456-426614174000"
    );
  });
});
