import { IDocumentHandler } from ".";
import clean from "./utils/cleanString";

type BOLETO = "COBRANCA" | "ARRECADACAO";

const FORMAT_BOLETO_REGEX: Record<BOLETO, (boleto: string) => string> = {
  COBRANCA: (boleto: string) =>
    boleto.replace(
      /(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d{1})(\d{10})/,
      "$1.$2 $3.$4 $5.$6 $7 $8",
    ),
  ARRECADACAO: (boleto: string) =>
    boleto.replace(
      /(\d{11})(\d{1})(\d{11})(\d{1})(\d{11})(\d{1})(\d{11})(\d{1})/,
      "$1-$2 $3-$4 $5-$6 $7-$8",
    ),
};

const VALIDATE_BOLETO_MAP: Record<BOLETO, (campo: string) => boolean> = {
  COBRANCA: (campo: string) => validateBoletoCobranca(campo),
  ARRECADACAO: (campo: string) => validateBoletoArrecadacao(campo),
};

/** * Retorna o tipo de boleto baseado no primeiro dígito.
 * Se o primeiro dígito for 8 ou 9, retorna "ARRECADACAO", caso contrário "COBRANCA".
 * @param {string} boleto Número do boleto a ser verificado.
 * @returns {BOLETO} Tipo de boleto.
 */
function returnBoletoType(boleto: string): BOLETO {
  const firstDigit = parseInt(boleto.charAt(0), 10);
  return firstDigit === 8 || firstDigit === 9 ? "ARRECADACAO" : "COBRANCA";
}

/** * Calcula o dígito verificador de um campo usando o módulo 10.
/ * @param {string} campo Campo a ser verificado.
/ * @returns {number} Dígito verificador calculado.
/ */
function modulo10(campo: string): number {
  const sum = campo
    .split("")
    .reverse()
    .reduce((acc, digit, idx) => {
      const multiplicador = idx % 2 === 0 ? 2 : 1;
      const num = parseInt(digit) * multiplicador;
      acc += num < 10 ? num : Math.floor(num / 10) + (num % 10);
      return acc;
    }, 0);

  const remainder = sum % 10;

  return remainder === 0 ? 0 : 10 - remainder;
}

/** * Calcula o dígito verificador de um campo usando o módulo 11.
 * @param {string} campo Campo a ser verificado.
 * @returns {number} Dígito verificador calculado.
 */
function modulo11(campo: string): number {
  let multiplicador = 2;
  const sum = campo
    .split("")
    .reverse()
    .reduce((acc, digit) => {
      acc += parseInt(digit) * multiplicador;
      multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
      return acc;
    }, 0);

  const remainder = sum % 11;

  return remainder === 0 || remainder === 1 ? 0 : 11 - remainder;
}

/** * Valida um número de boleto do tipo "COBRANCA"
 * {@param {string} campo Número do boleto a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
function validateBoletoCobranca(campo: string): boolean {
  const cleanCampo = clean(campo);

  if (cleanCampo.length !== 47) {
    return false;
  }

  const bloco1 = cleanCampo.slice(0, 9);
  const bloco2 = cleanCampo.slice(10, 20);
  const bloco3 = cleanCampo.slice(21, 31);
  const dv1 = parseInt(cleanCampo.charAt(9));
  const dv2 = parseInt(cleanCampo.charAt(20));
  const dv3 = parseInt(cleanCampo.charAt(31));
  const dvGeral = cleanCampo.charAt(32);

  const barra =
    cleanCampo.slice(0, 4) + // banco + moeda
    cleanCampo.slice(32, 33) + // DV geral
    cleanCampo.slice(33, 47) + // valor e vencimento
    cleanCampo.slice(4, 9) + // campo 1 restante
    cleanCampo.slice(10, 20) + // campo 2
    cleanCampo.slice(21, 31); // campo 3

  const codigoSemDV = barra.substring(0, 4) + barra.substring(5);

  return (
    modulo10(bloco1) === dv1 &&
    modulo10(bloco2) === dv2 &&
    modulo10(bloco3) === dv3 &&
    modulo11(codigoSemDV) === parseInt(dvGeral, 10)
  );
}
/** * Valida um número de boleto do tipo "ARRECADACAO"
 * @param {string} campo Número do boleto a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
function validateBoletoArrecadacao(campo: string): boolean {
  const cleanCampo = clean(campo);
  if (cleanCampo.length !== 48) {
    return false;
  }
  const typeValue = cleanCampo.charAt(2);

  const isMod10 = typeValue === "6" || typeValue === "7";

  cleanCampo.split("").map((item, idx) => {
    const bloco = cleanCampo.slice(idx * 12, idx * 12 + 11);
    const dv = parseInt(cleanCampo.charAt(idx * 12 + 11));

    const calculatedDv = isMod10 ? modulo10(bloco) : modulo11(bloco);
    if (dv !== calculatedDv) {
      return false;
    }
  });
  return true;
}
/**
 * @class Boleto
 * @implements {IDocumentHandler<string>}
 * @param {string} boleto Número do boleto a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
export class Boleto implements IDocumentHandler<string> {
  constructor(private boleto: string) {}

  isValid(): boolean {
    return Boleto.isValid(this.boleto);
  }

  format(): string {
    return Boleto.format(this.boleto);
  }

  parse(): string {
    return Boleto.parse(this.boleto);
  }

  static isValid(boleto: string): boolean {
    const cleanBoleto = clean(boleto);
    const type = returnBoletoType(cleanBoleto);

    return VALIDATE_BOLETO_MAP[type](cleanBoleto);
  }

  static format(boleto: string): string {
    const cleanBoleto = clean(boleto);

    return FORMAT_BOLETO_REGEX[returnBoletoType(cleanBoleto)](cleanBoleto);
  }

  static parse(boleto: string): string {
    const cleanBoleto = clean(boleto);
    return cleanBoleto;
  }
}
