export interface IValidator<T> {
  isValid(input: T): boolean;
}

export interface IFormatter<T> {
  format(input: T): string;
}

export interface IParser<T> {
  parse(input: T): string;
}

export interface IDocumentHandler<T>
  extends IValidator<T>,
    IFormatter<T>,
    IParser<T> {}

export { Cpf } from "./cpf";
export { Cnpj } from "./cnpj";
export { Celular } from "./celular";
export { Email } from "./email";
export { Uuid } from "./uuid";
export { Pix } from "./pix";
export { Cep } from "./cep";
export { Telefone } from "./telefone";
export { Cnh } from "./cnh";
