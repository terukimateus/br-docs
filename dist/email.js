"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(email) {
        this.email = email;
    }
    isValid() {
        return Email.isValid(this.email);
    }
    /**
     * Valida um email.
     * Aceita formatos comuns de email e retorna true se o email for válido.
     * @param email - O email a ser validado.
     * @returns boolean - Retorna true se o email for válido, caso contrário false.
     */
    static isValid(email) {
        if (!email)
            return false;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
exports.Email = Email;
