import { IGeneric } from ".";
import clean from "./utils/cleanString";

export class Cep implements IGeneric<"cep"> {
  constructor(private cep: string) {}

  isValid(): boolean {
    return Cep.isValid(this.cep);
  }

  format(): string {
    return Cep.format(this.cep);
  }

  parse(): string {
    return Cep.parse(this.cep);
  }

  /**
   * Valida um CEP brasileiro.
   * Aceita formatos com ou sem hífen, e retorna true se o CEP for válido.
   *
   * @param cep - O CEP a ser validado.
   * @returns boolean - Retorna true se o CEP for válido, caso contrário false.
   */
  static isValid(cep: string): boolean {
    if (!cep) return false;

    const cleanCep = clean(cep);
    return /^[0-9]{5}-?[0-9]{3}$/.test(cleanCep);
  }
  /**
   * Formata um CEP brasileiro.
   * Aceita formatos com ou sem hífen, e retorna o CEP formatado.
   *
   * @param cep - O CEP a ser formatado.
   * @returns string - Retorna o CEP formatado.
   */
  static format(cep: string): string {
    const cleanCep = clean(cep);
    if (cleanCep.length === 8) {
      return cleanCep.replace(/(\d{5})(\d{3})/, "$1-$2");
    }
    return cep;
  }
  /**
   * Faz o parsing de um CEP brasileiro.
   * Remove todos os caracteres não numéricos do CEP.
   *
   * @param cep - O CEP a ser parseado.
   * @returns string - Retorna o CEP parseado.
   */
  static parse(cep: string): string {
    return clean(cep);
  }
}
