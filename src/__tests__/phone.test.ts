import { Celular } from "../celular";
import { describe, expect, it } from "vitest";

describe("Phone Validation", () => {
  it("should validate a correct phone number", () => {
    expect(Celular.isValid("11987654321")).toBe(true);
  });

  it("should validate a correct phone number with DDD", () => {
    expect(Celular.isValid("(11) 98765-4321")).toBe(true);
  });

  it("should invalidate an incorrect phone number", () => {
    expect(Celular.isValid("1198765432")).toBe(false);
  });

  it("should format a phone number correctly", () => {
    expect(Celular.format("11987654321")).toBe("(11) 98765-4321");
  });

  it("should parse a phone number correctly", () => {
    expect(Celular.parse("(11) 98765-4321")).toBe("11987654321");
  });

  it("should return false for invalid ddd phone numbers", () => {
    expect(Celular.isValid("(10) 99835-4099")).toBe(false);
  });

  it("should return false for invalid phone numbers", () => {
    expect(Celular.isValid("12345678901")).toBe(false);
    expect(Celular.isValid("abcdefghij")).toBe(false);
  });
});
