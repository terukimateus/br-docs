import { IGeneric } from ".";
type PixTypes = "celular" | "cpf" | "email" | "uuid";
export declare class Pix implements Omit<IGeneric<"pix">, "parse"> {
    private pix;
    constructor(pix: string);
    isValid(): boolean;
    format(): string;
    /**
     * Valida um Pix.
     * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna true se o Pix for válido.
     * @param pix - O Pix a ser validado.
     * @returns boolean - Retorna true se o Pix for válido, caso contrário false.
     */
    static isValid(pix: string): boolean;
    /**
     * Formata um Pix.
     * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna o Pix formatado.
     * @param pix - O Pix a ser formatado.
     * @param type - O tipo de Pix a ser formatado.
     * @returns string - Retorna o Pix formatado.
     */
    static format(pix: string, type: PixTypes): string;
}
export {};
