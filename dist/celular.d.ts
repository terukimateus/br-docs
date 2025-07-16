import { IGeneric } from ".";
/** * Classe para validação e formatação de números de telefone celular.
 * Aceita formatos com ou sem DDD, e retorna true se o número for válido.
 * Exemplo: "11987654321" ou "(11) 98765-4321".
 * @class Celular
 * @implements {IGeneric<"celular">}
 * @param {string} phone Número de telefone a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
export declare class Celular implements IGeneric<"celular"> {
    private phone;
    constructor(phone: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    /**
     * Valida um número de telefone celular.
     * Aceita formatos com ou sem DDD, e retorna true se o número for válido.
     *
     * @param {string} phone Número de telefone a ser validado.
     * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
     */
    static isValid(phone: string): boolean;
    /**
     * Formata um número de telefone celular.
     * Aceita formatos com ou sem DDD, e retorna o número formatado.
     *
     * @param {string} phone Número de telefone a ser formatado.
     * @returns {string} Número formatado.
     */
    static format(phone: string): string;
    /**
     * Faz o parsing de um número de telefone celular.
     * Remove todos os caracteres não numéricos e retorna o número limpo.
     *
     * @param {string} phone Número de telefone a ser parseado.
     * @returns {string} Número parseado.
     */
    static parse(phone: string): string;
}
