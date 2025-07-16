import { IGeneric } from ".";

const PHONE_LENGTHS_REGEX: Record<number, RegExp> = {
  10: /^(\d{2})(\d{4})(\d{4})$/,
  11: /^(\d{2})(\d{5})(\d{4})$/,
};

const REGEX_PHONE: RegExp =
  /^(1[1-9]|2[1-2]|24|2[2-8]|3[1-5]|3[7-8]|4[1-9]|51|5[3-5]|6[1-9]|71|7[3-5]|77|79|8[1-9]|9[1-9])9\d{8}$/;

/** * Classe para validação e formatação de números de telefone celular.
 * Aceita formatos com ou sem DDD, e retorna true se o número for válido.
 * Exemplo: "11987654321" ou "(11) 98765-4321".
 * @class Celular
 * @implements {IGeneric<"celular">}
 * @param {string} phone Número de telefone a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
export class Celular implements IGeneric<"celular"> {
  constructor(private phone: string) {}

  isValid(): boolean {
    return Celular.isValid(this.phone);
  }

  format(): string {
    return Celular.format(this.phone);
  }

  parse(): string {
    return Celular.parse(this.phone);
  }

  /**
   * Valida um número de telefone celular.
   * Aceita formatos com ou sem DDD, e retorna true se o número for válido.
   *
   * @param {string} phone Número de telefone a ser validado.
   * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
   */
  static isValid(phone: string): boolean {
    if (!phone) return false;

    const cleanPhone = phone.replace(/\D/g, "");
    return REGEX_PHONE.test(cleanPhone);
  }
  /**
   * Formata um número de telefone celular.
   * Aceita formatos com ou sem DDD, e retorna o número formatado.
   *
   * @param {string} phone Número de telefone a ser formatado.
   * @returns {string} Número formatado.
   */
  static format(phone: string): string {
    const cleanPhone = phone.replace(/\D/g, "");
    const length = cleanPhone.length;
    if (length === 10 || length === 11) {
      return cleanPhone.replace(PHONE_LENGTHS_REGEX[length], "($1) $2-$3");
    }

    return phone;
  }
  /**
   * Faz o parsing de um número de telefone celular.
   * Remove todos os caracteres não numéricos e retorna o número limpo.
   *
   * @param {string} phone Número de telefone a ser parseado.
   * @returns {string} Número parseado.
   */
  static parse(phone: string): string {
    const cleanPhone = phone.replace(/\D/g, "");

    return cleanPhone;
  }
}
