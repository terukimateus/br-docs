import { IGeneric } from ".";
export declare class Telefone implements IGeneric<"telefone"> {
    private phone;
    constructor(phone: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    /**
     * Valida um número de telefone.
     *
     * @param phone - O número de telefone a ser validado.
     * @returns boolean - Retorna true se o número for válido, caso contrário false.
     */
    static isValid(phone: string): boolean;
    /**
     * Formata um número de telefone.
     *
     * @param phone - O número de telefone a ser formatado.
     * @returns string - Retorna o número formatado.
     */
    static format(phone: string): string;
    /**
     * Faz o parsing de um número de telefone.
     * Remove todos os caracteres não numéricos do telefone.
     *
     * @param phone - O número de telefone a ser parseado.
     * @returns string - Retorna o telefone parseado.
     */
    static parse(phone: string): string;
}
