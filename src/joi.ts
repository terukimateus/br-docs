import type { ExtensionFactory } from "joi";

import { Cpf } from "./cpf";
import { Cnpj } from "./cnpj";
import { Nis } from "./nis";
import { Cnh } from "./cnh";
import { Cep } from "./cep";
import { Telefone } from "./telefone";
import { Pix } from "./pix";
import { Boleto } from "./boleto";
import { Celular } from "./celular";

export const validator: ExtensionFactory = (joi) => ({
  type: "document",
  base: joi.string(),
  messages: {
    "document.cpf": "CPF inválido",
    "document.cnpj": "CNPJ inválido",
    "document.nis": "NIS inválido",
    "document.cnh": "CNH inválida",
    "document.cep": "CEP inválido",
    "document.phone": "Telefone inválido",
    "document.uuid": "UUID inválido",
    "document.pix": "Chave PIX inválida",
    "document.boleto": "Boleto inválido",
    "document.celular": "Celular inválido",
  },
  rules: {
    cpf: {
      validate: (value, helpers) =>
        Cpf.isValid(value) ? value : helpers.error("document.cpf"),
    },
    cnpj: {
      validate: (value, helpers) =>
        Cnpj.isValid(value) ? value : helpers.error("document.cnpj"),
    },
    nis: {
      validate: (value, helpers) =>
        Nis.isValid(value) ? value : helpers.error("document.nis"),
    },
    cnh: {
      validate: (value, helpers) =>
        Cnh.isValid(value) ? value : helpers.error("document.cnh"),
    },
    cep: {
      validate: (value, helpers) =>
        Cep.isValid(value) ? value : helpers.error("document.cep"),
    },
    phone: {
      validate: (value, helpers) =>
        Telefone.isValid(value) ? value : helpers.error("document.phone"),
    },
    pix: {
      validate: (value, helpers) =>
        Pix.isValid(value) ? value : helpers.error("document.pix"),
    },
    boleto: {
      validate: (value, helpers) =>
        Boleto.isValid(value) ? value : helpers.error("document.boleto"),
    },
    celular: {
      validate: (value, helpers) =>
        Celular.isValid(value) ? value : helpers.error("document.celular"),
    },
  },
});

export default validator;
