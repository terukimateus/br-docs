import { Cnpj } from "./cnpj";
import { Cpf } from "./cpf";

/**
 * Interface que define o método de validação de um documento.
 * Implementa o método de validação que verifica se o documento é válido.
 * @param T - Tipo do documento a ser validado.
 * @interface IValidator
 */
export interface IValidator<T> {
  isValid(input: T): boolean;
}
/** Interface que define o método de formatação de um documento.
 * Implementa o método de formatação que converte o documento em uma string formatada.
 * @param T - Tipo do documento a ser formatado.
 * @interface IFormatter
 */
export interface IFormatter<T> {
  format(input: T): string;
}
/** Interface que define o metodo de parsing de um documento.
 * Implementa o método de parsing que converte o documento em uma string.
 * @param T - Tipo do documento a ser parseado.
 * @interface IParser
 */
export interface IParser<T> {
  parse(input: T): string;
}
/**
 * Interface que define os métodos comuns para manipulação de documentos.
 * Implementa as interfaces de validação, formatação e parsing.
 * @param T - Tipo do documento a ser manipulado.
 * @interface IDocumentHandler
 */
export interface IDocumentHandler<T> {
  isValid?: (input: T) => boolean;
  format?: (input: T) => string;
  parse?: (input: T) => string;
}

export { Cpf } from "./cpf";
export { Cnpj } from "./cnpj";
export { Celular } from "./celular";
export { Email } from "./email";
export { Uuid } from "./uuid";
export { Pix } from "./pix";
export { Cep } from "./cep";
export { Telefone } from "./telefone";
export { Cnh } from "./cnh";
export { Boleto } from "./boleto";
export { Nis } from "./nis";

export const validator = (joi: any) => ({
  type: "document",
  base: joi.string(),
  messages: {
    "document.cpf": "CPF inválido",
    "document.cnpj": "CNPJ inválido",
  },
  rules: {
    cpf: {
      validate(value: any, helpers: any, args: any, options: any) {
        if (!Cpf.isValid(value)) {
          return helpers.error("document.cpf");
        }

        return value;
      },
    },
    cnpj: {
      validate(value: any, helpers: any, args: any, options: any) {
        if (!Cnpj.isValid(value)) {
          return helpers.error("document.cnpj");
        }

        return value;
      },
    },
  },
});

export default validator;
