import { IGeneric } from ".";
export declare class Email implements Omit<IGeneric<"email">, "format" | "parse"> {
    private email;
    constructor(email: string);
    isValid(): boolean;
    /**
     * Valida um email.
     * Aceita formatos comuns de email e retorna true se o email for válido.
     * @param email - O email a ser validado.
     * @returns boolean - Retorna true se o email for válido, caso contrário false.
     */
    static isValid(email: string): boolean;
}
