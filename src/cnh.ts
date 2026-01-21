import { IDocumentHandler } from ".";
import clean from "./utils/cleanString";

/**
 * Função auxiliar para calcular o dígito verificador de um número.
 * @param digits
 * @returns {number} O dígito verificador calculado.
 */
const calcDigit = (digits: string): number => {
  const digit = digits
    .split("")
    .reduce((acc, digit, index) => acc + parseInt(digit, 10) * (9 - index), 0);
  const remainder = digit % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

export class Cnh implements IDocumentHandler<string> {
  constructor(private cnh: string) {}

  isValid(): boolean {
    return Cnh.isValid(this.cnh);
  }

  format(): string {
    return Cnh.format(this.cnh);
  }

  parse(): string {
    return Cnh.parse(this.cnh);
  }
  /**
   * Valida uma CNH brasileira.
   * Aceita formatos com ou sem pontos e hífen, e retorna true se a CNH for válida.
   *
   * @param cnh - A CNH a ser validada.
   * @returns boolean - Retorna true se a CNH for válida, caso contrário false.
   */
  static isValid(cnh: string): boolean {
    if (!cnh) return false;

    const cleanCnh = clean(cnh);

    if (cleanCnh.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cleanCnh)) return false;

    const base = cleanCnh.slice(0, 9).split("").map(Number);

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < 9; i++) {
      sum1 += base[i] * (9 - i);
      sum2 += base[i] * (1 + i);
    }

    const dv1Raw = sum1 % 11;
    const dv1 = dv1Raw > 9 ? 0 : dv1Raw;

    let dv2 = sum2 % 11;

    if (dv1Raw > 9) {
      dv2 = dv2 - 2;
      if (dv2 < 0) dv2 += 9;
    }

    if (dv2 > 9) dv2 = 0;

    return cleanCnh[9] === String(dv1) && cleanCnh[10] === String(dv2);
  }
  /**
   * Formata uma CNH brasileira.
   * Aceita formatos com ou sem pontos e hífen, e retorna a CNH formatada.
   *
   * @param cnh - A CNH a ser formatada.
   * @returns string - Retorna a CNH formatada.
   */
  static format(cnh: string): string {
    const cleanCnh = clean(cnh);
    if (cleanCnh.length === 11) {
      return cleanCnh.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return cnh;
  }
  /**
   * Faz o parsing de uma CNH brasileira.
   * Remove todos os caracteres não numéricos da CNH.
   *
   * @param cnh - A CNH a ser parseada.
   * @returns string - Retorna a CNH parseada.
   */
  static parse(cnh: string): string {
    return clean(cnh);
  }
}
