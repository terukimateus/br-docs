import { IGeneric } from ".";

const weights: Record<number, number[]> = {
  12: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
  13: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
};
/**
 * Faz o cálculo do dígito verificador de um CNPJ.
 * @param digits - Os dígitos do CNPJ para o qual o dígito verificador será calculado.
 * @param pos - A posição do dígito a ser calculado (12 ou 13).
 * @returns {number} O dígito verificador calculado.
 */
const calcDigit = (digits: string, pos: number): number => {
  const digitWeights = weights[pos];

  const sum = digits
    .split("")
    .map((digit, index) => parseInt(digit, 10) * digitWeights[index])
    .reduce((acc, curr) => acc + curr, 0);

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

export class Cnpj implements IGeneric<"cnpj"> {
  constructor(private cnpj: string) {}

  isValid(): boolean {
    return Cnpj.isValid(this.cnpj);
  }

  format(): string {
    return Cnpj.format(this.cnpj);
  }

  parse(): string {
    return Cnpj.parse(this.cnpj);
  }
  /**
   * Valida um CNPJ brasileiro.
   * Aceita formatos com ou sem pontos, barras e hífen, e retorna true se o CNPJ for válido.
   *
   * @param cnpj - O CNPJ a ser validado.
   * @returns boolean - Retorna true se o CNPJ for válido, caso contrário false.
   */
  static isValid(cnpj: string): boolean {
    if (!cnpj) return false;

    const cleanCnpj = cnpj.replace(/\D/g, "");
    if (cleanCnpj.length !== 14) return false;
    if (/^(\d)\1+$/.test(cleanCnpj)) return false;

    const twelveDigits = cleanCnpj.slice(0, 12);
    const firstDigit = calcDigit(twelveDigits, 12);
    const secondDigit = calcDigit(twelveDigits + firstDigit, 13);

    return (
      cleanCnpj ===
      twelveDigits + firstDigit.toString() + secondDigit.toString()
    );
  }
  /**
   * Formata um CNPJ brasileiro.
   * Aceita formatos com ou sem pontos, barras e hífen, e retorna o CNPJ formatado.
   *
   * @param cnpj - O CNPJ a ser formatado.
   * @returns string - Retorna o CNPJ formatado.
   */
  static format(cnpj: string): string {
    const cleanCnpj = cnpj.replace(/\D/g, "");
    if (cleanCnpj.length !== 14) return cnpj;
    return cleanCnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  }
  /**
   * Faz o parsing de um CNPJ brasileiro.
   * Remove todos os caracteres não numéricos do CNPJ.
   *
   * @param cnpj - O CNPJ a ser parseado.
   * @returns string - Retorna o CNPJ parseado.
   */
  static parse(cnpj: string): string {
    const cleanCnpj = cnpj.replace(/\D/g, "");
    if (cleanCnpj.length !== 14) return cnpj;
    return cleanCnpj;
  }
}
