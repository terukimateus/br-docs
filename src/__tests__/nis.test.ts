import { describe, expect, it } from "vitest";
import { Nis } from "../nis";

describe("NIS(PIS/PASEP/NIT)", () => {
  it("shoud validate a correct PIS/PASEP", () => {
    expect(Nis.isValid("660.56475.63-5")).toBe(true);
    expect(Nis.isValid("66056475635")).toBe(true);
    expect(Nis.isValid("46126189577")).toBe(true);
  });

  it("should validate a correct NIT", () => {
    expect(Nis.isValid("113.81272.07-4")).toBe(true);
    expect(Nis.isValid("130.93729.72-5")).toBe(true);
    expect(Nis.isValid("13093729725")).toBe(true);
  });

  it("shoud invalidate an incorrect NIS", () => {
    expect(Nis.isValid("123.45678.90-1")).toBe(false);
    expect(Nis.isValid("00000000000")).toBe(false);
    expect(Nis.isValid("66056475634")).toBe(false);
    expect(Nis.isValid("")).toBe(false);
    expect(Nis.isValid("123")).toBe(false);
  });

  it("shoud format a NIS correctly", () => {
    expect(Nis.format("66056475635")).toBe("660.56475.63-5");
    expect(Nis.format("46126189577")).toBe("461.26189.57-7");
  });

  it("shoud parse a formatted NIS correctly", () => {
    expect(Nis.parse("660.56475.63-5")).toBe("66056475635");
  });
});
