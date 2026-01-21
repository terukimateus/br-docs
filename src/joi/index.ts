import type { ExtensionFactory, Root } from "joi";
export type { StringSchema } from "joi";
import { Cpf } from "../cpf";
import { Cnpj } from "../cnpj";
import { Nis } from "../nis";
import { Cnh } from "../cnh";
import { Cep } from "../cep";
import { Telefone } from "../telefone";
import { Pix } from "../pix";
import { Boleto } from "../boleto";
import { Celular } from "../celular";

import "joi";

declare module "joi" {
  interface DocumentSchema extends StringSchema {
    cpf(): this;
    cnpj(): this;
    nis(): this;
    cnh(): this;
    cep(): this;
    phone(): this;
    pix(): this;
    boleto(): this;
    celular(): this;
  }

  interface Root {
    document(): DocumentSchema;
  }
}

export const brDocsJoiExtension: ExtensionFactory = (joi) => ({
  type: "document",
  base: joi.string(),
  messages: {
    "document.cpf": "CPF inválido",
    "document.cnpj": "CNPJ inválido",
    "document.nis": "NIS inválido",
    "document.cnh": "CNH inválida",
    "document.cep": "CEP inválido",
    "document.phone": "Telefone inválido",
    "document.pix": "Chave PIX inválida",
    "document.boleto": "Boleto inválido",
    "document.celular": "Celular inválido",
  },
  rules: {
    cpf: { validate: (v, h) => (Cpf.isValid(v) ? v : h.error("document.cpf")) },
    cnpj: {
      validate: (v, h) => (Cnpj.isValid(v) ? v : h.error("document.cnpj")),
    },
    nis: { validate: (v, h) => (Nis.isValid(v) ? v : h.error("document.nis")) },
    cnh: { validate: (v, h) => (Cnh.isValid(v) ? v : h.error("document.cnh")) },
    cep: { validate: (v, h) => (Cep.isValid(v) ? v : h.error("document.cep")) },
    phone: {
      validate: (v, h) => (Telefone.isValid(v) ? v : h.error("document.phone")),
    },
    pix: { validate: (v, h) => (Pix.isValid(v) ? v : h.error("document.pix")) },
    boleto: {
      validate: (v, h) => (Boleto.isValid(v) ? v : h.error("document.boleto")),
    },
    celular: {
      validate: (v, h) =>
        Celular.isValid(v) ? v : h.error("document.celular"),
    },
  },
});

export function extendJoi(joi: Root): Root {
  return joi.extend(brDocsJoiExtension);
}
