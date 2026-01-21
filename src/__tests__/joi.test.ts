import BaseJoi, { Schema } from "joi";
import { brDocsJoiExtension } from "../joi/joi";
import { describe, expect, it } from "vitest";

const Joi = BaseJoi.extend(brDocsJoiExtension);

function expectOk(schema: Schema, value: string) {
  const { error } = schema.validate(value);
  expect(error).toBeUndefined();
}

function expectErr(schema: Schema, value: string, code: string) {
  const { error } = schema.validate(value);
  expect(error).toBeTruthy();
  expect(error!.details[0].type).toBe(code);
}

describe("br-docs Joi extension", () => {
  it("cpf", () => {
    expectOk(Joi.document().cpf(), "529.982.247-25");
    expectErr(Joi.document().cpf(), "123", "document.cpf");
  });

  it("cnpj", () => {
    expectOk(Joi.document().cnpj(), "04.252.011/0001-10");
    expectErr(Joi.document().cnpj(), "123", "document.cnpj");
  });

  it("nis", () => {
    expectOk(Joi.document().nis(), "16029214650");
    expectErr(Joi.document().nis(), "16029214651", "document.nis");
  });

  it("cnh", () => {
    expectOk(Joi.document().cnh(), "60930978987");
    expectErr(Joi.document().cnh(), "11111111111", "document.cnh");
  });

  it("cep / phone / celular / uuid / pix", () => {
    expectOk(Joi.document().cep(), "01001-000");
    expectOk(Joi.document().phone(), "1133334444");
    expectOk(Joi.document().celular(), "11999998888");
    expectOk(Joi.document().uuid(), "550e8400-e29b-41d4-a716-446655440000");
    expectOk(Joi.document().pix(), "a@b.com");
  });

  it("boleto", () => {
    expectOk(
      Joi.document().boleto(),
      "00190.00009 02372.190005 00017.356171 9 63690000007179",
    );
    expectErr(Joi.document().boleto(), "123", "document.boleto");
  });
});
