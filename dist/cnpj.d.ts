import { IGeneric } from ".";
export declare class Cnpj implements IGeneric<"cnpj"> {
    private cnpj;
    constructor(cnpj: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    /**
     * Valida um CNPJ brasileiro.
     * Aceita formatos com ou sem pontos, barras e hífen, e retorna true se o CNPJ for válido.
     *
     * @param cnpj - O CNPJ a ser validado.
     * @returns boolean - Retorna true se o CNPJ for válido, caso contrário false.
     */
    static isValid(cnpj: string): boolean;
    /**
     * Formata um CNPJ brasileiro.
     * Aceita formatos com ou sem pontos, barras e hífen, e retorna o CNPJ formatado.
     *
     * @param cnpj - O CNPJ a ser formatado.
     * @returns string - Retorna o CNPJ formatado.
     */
    static format(cnpj: string): string;
    /**
     * Faz o parsing de um CNPJ brasileiro.
     * Remove todos os caracteres não numéricos do CNPJ.
     *
     * @param cnpj - O CNPJ a ser parseado.
     * @returns string - Retorna o CNPJ parseado.
     */
    static parse(cnpj: string): string;
}
