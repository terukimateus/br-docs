import { Telefone } from "../telefone";
import { describe, it, expect } from "vitest";

describe("Telefone Validation", () => {
  it("should validate a correct phone number", () => {
    expect(Telefone.isValid("1132654321")).toBe(true);
  });

  it("should validate a correct phone number with DDD", () => {
    expect(Telefone.isValid("(11) 3265-4321")).toBe(true);
  });

  it("should invalidate an incorrect phone number", () => {
    expect(Telefone.isValid("11987635432")).toBe(false);
  });

  it("should format a phone number correctly", () => {
    expect(Telefone.format("1132654321")).toBe("(11) 3265-4321");
  });

  it("should parse a phone number correctly", () => {
    expect(Telefone.parse("(11) 3265-4321")).toBe("1132654321");
  });

  it("should return false for invalid DDD phone numbers", () => {
    expect(Telefone.isValid("(10) 3235-4099")).toBe(false);
  });

  it("should return false for invalid phone numbers", () => {
    expect(Telefone.isValid("12345678901")).toBe(false);
    expect(Telefone.isValid("abcdefghij")).toBe(false);
  });
});
