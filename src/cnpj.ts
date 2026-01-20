import { IDocumentHandler } from ".";
import cleanAlphaNumeric from "./utils/cleanAlphaNumeric";

const weights: Record<number, number[]> = {
  12: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
  13: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
};

const charToValue = (char: string): number => {
  return char.charCodeAt(0) - 48; // Regra oficial: ASCII - 48 (A=65->17, etc.)
};

/**
 * Faz o cálculo do dígito verificador de um CNPJ.
 * @param digits - Os dígitos do CNPJ para o qual o dígito verificador será calculado.
 * @param pos - A posição do dígito a ser calculado (12 ou 13).
 * @returns {number} O dígito verificador calculado.
 */
const calcDigit = (digits: string, pos: number): number => {
  const digitWeights = weights[pos];

  const values = digits.split("").map(charToValue);

  const sum = values.reduce(
    (acc, val, idx) => acc + val * digitWeights[idx],
    0,
  );

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

export class Cnpj implements IDocumentHandler<string> {
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

    const cleanCnpj = cleanAlphaNumeric(cnpj);
    if (cleanCnpj.length !== 14) return false;

    const base12 = cleanCnpj.slice(0, 12);
    const dvStr = cleanCnpj.slice(12);

    if (!/^[A-Z0-9]{12}$/.test(base12)) return false;
    if (!/^\d{2}$/.test(dvStr)) return false;

    if (/^0{14}$/.test(cleanCnpj)) return false;

    const dv1 = calcDigit(base12, 12);
    const dv2 = calcDigit(base12 + String(dv1), 13);

    return dvStr === `${dv1}${dv2}`;
  }
  /**
   * Formata um CNPJ brasileiro.
   * Aceita formatos com ou sem pontos, barras e hífen, e retorna o CNPJ formatado.
   *
   * @param cnpj - O CNPJ a ser formatado.
   * @returns string - Retorna o CNPJ formatado.
   */
  static format(cnpj: string): string {
    const cleanCnpj = cleanAlphaNumeric(cnpj);
    if (cleanCnpj.length !== 14) return cnpj;
    return cleanCnpj.replace(
      /^([A-Z0-9]{2})([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{4})(\d{2})$/,
      "$1.$2.$3/$4-$5",
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
    const cleanCnpj = cleanAlphaNumeric(cnpj);
    if (cleanCnpj.length !== 14) return cnpj;
    return cleanCnpj;
  }
}
