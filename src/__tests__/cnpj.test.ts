import { Cnpj } from "../cnpj";
import { describe, it, expect } from "vitest";

describe("CNPJ Validation", () => {
  it("should validate a correct CNPJ", () => {
    expect(Cnpj.isValid("12.345.678/0001-95")).toBe(true);
  });

  it("should validate a correct CNPJ without formatting", () => {
    expect(Cnpj.isValid("12345678000195")).toBe(true);
  });

  it("should validate a correct alphanumeric CNPJ", () => {
    expect(Cnpj.isValid("3K.4ZV.GKB/0001-10")).toBe(true);
    expect(Cnpj.isValid("3K4ZVGKB000110")).toBe(true);
    expect(Cnpj.isValid("TA.JDY.N97/0001-72")).toBe(true);
    expect(Cnpj.isValid("VZ.ZNH.Z91/0001-06")).toBe(true);
  });

  it("should invalidate an incorrect CNPJ", () => {
    expect(Cnpj.isValid("12.345.678/0001-96")).toBe(false);
  });

  it("should invalidate an empty CNPJ", () => {
    expect(Cnpj.isValid("")).toBe(false);
  });

  it("should invalidate an incorrect alphanumeric CNPJ", () => {
    expect(Cnpj.isValid("3K.4ZV.GKB/0001-11")).toBe(false);
  });

  it("should format a alphanumeric CNPJ correctly", () => {
    expect(Cnpj.format("3K4ZVGKB000110")).toBe("3K.4ZV.GKB/0001-10");
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
