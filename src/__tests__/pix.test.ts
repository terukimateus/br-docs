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

  it("should auto detect and format phone pix", () => {
    expect(Pix.format("44922222333")).toBe("(44) 92222-2333");
  });

  it("should auto detect and format CPF pix", () => {
    expect(Pix.format("12345678909")).toBe("123.456.789-09");
  });

  it("should auto detect and format CNPJ pix", () => {
    expect(Pix.format("11222333000181")).toBe("11.222.333/0001-81");
  });

  it("should auto detect and format UUID pix", () => {
    expect(Pix.format("123e4567-e89b-12d3-a456-426614174000")).toBe(
      "123e4567-e89b-12d3-a456-426614174000"
    );
  });

  it("should parse phone pix", () => {
    expect(Pix.parse("(44) 92222-2333", "celular")).toBe("44922222333");
  });

  it("should auto detect and parse CPF pix", () => {
    expect(Pix.parse("123.456.789-09")).toBe("12345678909");
  });

  it("should auto detect and parse CNPJ pix", () => {
    expect(Pix.parse("11.222.333/0001-81")).toBe("11222333000181");
  });

  it("should parse email pix", () => {
    expect(Pix.parse(" Valid@Valid.com  ", "email")).toBe("valid@valid.com");
  });

  it("should auto detect and parse UUID pix", () => {
    expect(Pix.parse("123e4567-e89b-12d3-a456-426614174000")).toBe(
      "123e4567e89b12d3a456426614174000"
    );
  });

  it("should throw when pix type cannot be identified for format", () => {
    expect(() => Pix.format("invalid-pix" as string)).toThrow(
      "Tipo de Pix inválido"
    );
  });

  it("should throw when pix type cannot be identified for parse", () => {
    expect(() => Pix.parse("invalid-pix" as string)).toThrow(
      "Tipo de Pix inválido"
    );
  });
});
