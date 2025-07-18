import { IDocumentHandler } from ".";
export declare class Cnh implements IDocumentHandler<string> {
    private cnh;
    constructor(cnh: string);
    isValid(): boolean;
    format(): string;
    parse(): string;
    /**
     * Valida uma CNH brasileira.
     * Aceita formatos com ou sem pontos e hífen, e retorna true se a CNH for válida.
     *
     * @param cnh - A CNH a ser validada.
     * @returns boolean - Retorna true se a CNH for válida, caso contrário false.
     */
    static isValid(cnh: string): boolean;
    /**
     * Formata uma CNH brasileira.
     * Aceita formatos com ou sem pontos e hífen, e retorna a CNH formatada.
     *
     * @param cnh - A CNH a ser formatada.
     * @returns string - Retorna a CNH formatada.
     */
    static format(cnh: string): string;
    /**
     * Faz o parsing de uma CNH brasileira.
     * Remove todos os caracteres não numéricos da CNH.
     *
     * @param cnh - A CNH a ser parseada.
     * @returns string - Retorna a CNH parseada.
     */
    static parse(cnh: string): string;
}
