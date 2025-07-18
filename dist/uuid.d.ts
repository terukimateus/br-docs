import { IDocumentHandler } from ".";
export declare class Uuid implements Omit<IDocumentHandler<string>, "format"> {
    private uuid;
    constructor(uuid: string);
    isValid(): boolean;
    parse(): string;
    /**
     * Valida um UUID.
     * Aceita formatos comuns de UUID e retorna true se o UUID for válido.
     * @param uuid - O UUID a ser validado.
     * @returns boolean - Retorna true se o UUID for válido, caso contrário false.
     */
    static isValid(uuid: string): boolean;
    /**
     * Formata um UUID.
     * Aceita formatos com ou sem hífen, e retorna o UUID formatado.
     * @param uuid - O UUID a ser formatado.
     * @returns string - Retorna o UUID formatado.
     */
    static format(uuid: string): string;
    /**
     * Faz o parsing de um UUID.
     * Remove todos os hífens do UUID.
     * @param uuid - O UUID a ser parseado.
     * @returns string - Retorna o UUID parseado.
     */
    static parse(uuid: string): string;
}
