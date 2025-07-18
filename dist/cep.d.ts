import { IDocumentHandler } from ".";
export declare class Cep implements IDocumentHandler<"cep"> {
    private cep;
    constructor(cep: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    /**
     * Valida um CEP brasileiro.
     * Aceita formatos com ou sem hífen, e retorna true se o CEP for válido.
     *
     * @param cep - O CEP a ser validado.
     * @returns boolean - Retorna true se o CEP for válido, caso contrário false.
     */
    static isValid(cep: string): boolean;
    /**
     * Formata um CEP brasileiro.
     * Aceita formatos com ou sem hífen, e retorna o CEP formatado.
     *
     * @param cep - O CEP a ser formatado.
     * @returns string - Retorna o CEP formatado.
     */
    static format(cep: string): string;
    /**
     * Faz o parsing de um CEP brasileiro.
     * Remove todos os caracteres não numéricos do CEP.
     *
     * @param cep - O CEP a ser parseado.
     * @returns string - Retorna o CEP parseado.
     */
    static parse(cep: string): string;
}
