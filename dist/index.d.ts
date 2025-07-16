/**
 * Interface genérica para validação, formatação e parsing de dados.
 * @template T - Tipo de dado a ser manipulado.
 */
export interface IGeneric<T> {
    /**
     * Verifica se o dado é válido.
     * @param input - Dado a ser validado.
     * @returns Verdadeiro se o dado for válido, falso caso contrário.
     */
    isValid(input: T): boolean;
    /**
     * Formata o dado.
     * @param input - Dado a ser formatado.
     * @returns Dado formatado.
     */
    format(input: T): string;
    /**
     * Faz o parsing do dado.
     * @param input - Dado a ser parseado.
     * @returns Dado parseado.
     */
    parse(input: T): string;
}
export { Cpf } from "./cpf";
export { Cnpj } from "./cnpj";
export { Celular } from "./celular";
export { Email } from "./email";
export { Uuid } from "./uuid";
export { Pix } from "./pix";
export { Cep } from "./cep";
