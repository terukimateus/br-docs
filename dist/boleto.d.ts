import { IDocumentHandler } from ".";
/**
 * @class Boleto
 * @implements {IDocumentHandler<string>}
 * @param {string} boleto Número do boleto a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
export declare class Boleto implements IDocumentHandler<string> {
    private boleto;
    constructor(boleto: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    static isValid(boleto: string): boolean;
    static format(boleto: string): string;
    static parse(boleto: string): string;
}
