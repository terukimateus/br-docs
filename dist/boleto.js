"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boleto = void 0;
const cleanString_1 = __importDefault(require("./utils/cleanString"));
const FORMAT_BOLETO_REGEX = {
    COBRANCA: (boleto) => boleto.replace(/(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d{1})(\d{10})/, "$1.$2 $3.$4 $5.$6 $7 $8"),
    ARRECADACAO: (boleto) => boleto.replace(/(\d{11})(\d{1})(\d{11})(\d{1})(\d{11})(\d{1})(\d{11})(\d{1})/, "$1-$2 $3-$4 $5-$6 $7-$8"),
};
const VALIDATE_BOLETO_MAP = {
    COBRANCA: (campo) => validateBoletoCobranca(campo),
    ARRECADACAO: (campo) => validateBoletoArrecadacao(campo),
};
/** * Retorna o tipo de boleto baseado no primeiro dígito.
 * Se o primeiro dígito for 8 ou 9, retorna "ARRECADACAO", caso contrário "COBRANCA".
 * @param {string} boleto Número do boleto a ser verificado.
 * @returns {BOLETO} Tipo de boleto.
 */
function returnBoletoType(boleto) {
    const firstDigit = parseInt(boleto.charAt(0), 10);
    return firstDigit === 8 || firstDigit === 9 ? "ARRECADACAO" : "COBRANCA";
}
/** * Calcula o dígito verificador de um campo usando o módulo 10.
/ * @param {string} campo Campo a ser verificado.
/ * @returns {number} Dígito verificador calculado.
/ */
function modulo10(campo) {
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
function modulo11(campo) {
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
function validateBoletoCobranca(campo) {
    const cleanCampo = (0, cleanString_1.default)(campo);
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
    const barra = cleanCampo.slice(0, 4) + // banco + moeda
        cleanCampo.slice(32, 33) + // DV geral
        cleanCampo.slice(33, 47) + // valor e vencimento
        cleanCampo.slice(4, 9) + // campo 1 restante
        cleanCampo.slice(10, 20) + // campo 2
        cleanCampo.slice(21, 31); // campo 3
    const codigoSemDV = barra.substring(0, 4) + barra.substring(5);
    return (modulo10(bloco1) === dv1 &&
        modulo10(bloco2) === dv2 &&
        modulo10(bloco3) === dv3 &&
        modulo11(codigoSemDV) === parseInt(dvGeral, 10));
}
/** * Valida um número de boleto do tipo "ARRECADACAO"
 * @param {string} campo Número do boleto a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
function validateBoletoArrecadacao(campo) {
    const cleanCampo = (0, cleanString_1.default)(campo);
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
class Boleto {
    constructor(boleto) {
        this.boleto = boleto;
    }
    isValid() {
        return Boleto.isValid(this.boleto);
    }
    format() {
        return Boleto.format(this.boleto);
    }
    parse() {
        return Boleto.parse(this.boleto);
    }
    static isValid(boleto) {
        const cleanBoleto = (0, cleanString_1.default)(boleto);
        const type = returnBoletoType(cleanBoleto);
        return VALIDATE_BOLETO_MAP[type](cleanBoleto);
    }
    static format(boleto) {
        const cleanBoleto = (0, cleanString_1.default)(boleto);
        return FORMAT_BOLETO_REGEX[returnBoletoType(cleanBoleto)](cleanBoleto);
    }
    static parse(boleto) {
        const cleanBoleto = (0, cleanString_1.default)(boleto);
        return cleanBoleto.replace(/[^0-9]/g, "");
    }
}
exports.Boleto = Boleto;
