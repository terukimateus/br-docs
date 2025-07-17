import { IGeneric } from ".";
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

export class Cnh implements IGeneric<"cnh"> {
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

    const firstDigit = calcDigit(cleanCnh.slice(0, 9));
    const secondDigit = calcDigit(cleanCnh.slice(0, 10));

    return (
      cleanCnh.length === 11 &&
      cleanCnh[9] === firstDigit.toString() &&
      cleanCnh[10] === secondDigit.toString()
    );
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
