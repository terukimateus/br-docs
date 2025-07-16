import { IGeneric } from ".";

export class Email implements Omit<IGeneric<"email">, "format" | "parse"> {
  constructor(private email: string) {}

  isValid(): boolean {
    return Email.isValid(this.email);
  }
  /**
   * Valida um email.
   * Aceita formatos comuns de email e retorna true se o email for válido.
   * @param email - O email a ser validado.
   * @returns boolean - Retorna true se o email for válido, caso contrário false.
   */
  static isValid(email: string): boolean {
    if (!email) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
