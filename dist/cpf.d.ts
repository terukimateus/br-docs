import { IGeneric } from ".";
export declare class Cpf implements IGeneric<"cpf"> {
    private cpf;
    constructor(cpf: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    /**
     * Valida um CPF brasileiro.
     * Aceita formatos com ou sem pontos e hífen, e retorna true se o CPF for válido.
     *
     * @param cpf - O CPF a ser validado.
     * @returns boolean - Retorna true se o CPF for válido, caso contrário false.
     */
    static isValid(cpf: string): boolean;
    /**
     * Formata um CPF brasileiro.
     * Aceita formatos com ou sem pontos e hífen, e retorna o CPF formatado.
     *
     * @param cpf - O CPF a ser formatado.
     * @returns string - Retorna o CPF formatado.
     */
    static format(cpf: string): string;
    /**
     * Faz o parsing de um CPF brasileiro.
     * Remove todos os caracteres não numéricos do CPF.
     *
     * @param cpf - O CPF a ser parseado.
     * @returns string - Retorna o CPF parseado.
     */
    static parse(cpf: string): string;
}
