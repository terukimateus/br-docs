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
 * @extends {IValidator<T>}
 * @extends {IFormatter<T>}
 * @extends {IParser<T>}
 */
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
