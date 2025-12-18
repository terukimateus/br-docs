import { IDocumentHandler } from ".";

export class Email implements Omit<IDocumentHandler<string>, "format"> {
  constructor(private email: string) {}

  isValid() {
    return Email.isValid(this.email);
  }

  parse() {
    return Email.parse(this.email);
  }

  /**   * Formata um email.
   * Remove espaços em branco e converte para minúsculas.
   * @param email - O email a ser formatado.
   * @returns string - Retorna o email formatado.
   */
  static parse(email: string): string {
    return email.trim().toLowerCase();
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
