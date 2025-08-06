"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpf = void 0;
const cleanString_1 = __importDefault(require("./utils/cleanString"));
const CPF_BLACKLIST = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
];
const weightPos = {
    10: [10, 9, 8, 7, 6, 5, 4, 3, 2],
    11: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
};
/** * Faz o cálculo do dígito verificador de um CPF.
 * @param digits - Os dígitos do CPF para o qual o dígito verificador será calculado.
 * @param position - A posição do dígito a ser calculado (10 ou 11).
 * @returns {number} O dígito verificador calculado.
 */
const calcDigit = (digits, position) => {
    const weight = weightPos[position];
    const sum = digits
        .split("")
        .map((digit, index) => parseInt(digit, 10) * weight[index])
        .reduce((acc, curr) => acc + curr, 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
};
class Cpf {
    constructor(cpf) {
        this.cpf = cpf;
    }
    isValid() {
        return Cpf.isValid(this.cpf);
    }
    format() {
        return Cpf.format(this.cpf);
    }
    parse() {
        return Cpf.parse(this.cpf);
    }
    /**
     * Valida um CPF brasileiro.
     * Aceita formatos com ou sem pontos e hífen, e retorna true se o CPF for válido.
     *
     * @param cpf - O CPF a ser validado.
     * @returns boolean - Retorna true se o CPF for válido, caso contrário false.
     */
    static isValid(cpf) {
        if (!cpf)
            return false;
        const cleanCpf = (0, cleanString_1.default)(cpf);
        if (cleanCpf.length !== 11)
            return false;
        if (CPF_BLACKLIST.includes(cpf))
            return false;
        const firstRemainder = calcDigit(cleanCpf.slice(0, 9), 10);
        if (firstRemainder !== parseInt(cleanCpf[9]))
            return false;
        const secondRemainder = calcDigit(cleanCpf.slice(0, 10), 11);
        if (secondRemainder !== parseInt(cleanCpf[10]))
            return false;
        return true;
    }
    /**
     * Formata um CPF brasileiro.
     * Aceita formatos com ou sem pontos e hífen, e retorna o CPF formatado.
     *
     * @param cpf - O CPF a ser formatado.
     * @returns string - Retorna o CPF formatado.
     */
    static format(cpf) {
        const cleanCpf = (0, cleanString_1.default)(cpf);
        if (cleanCpf.length !== 11)
            return cpf;
        return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    /**
     * Faz o parsing de um CPF brasileiro.
     * Remove todos os caracteres não numéricos do CPF.
     *
     * @param cpf - O CPF a ser parseado.
     * @returns string - Retorna o CPF parseado.
     */
    static parse(cpf) {
        const cleanCpf = (0, cleanString_1.default)(cpf);
        if (cleanCpf.length !== 11)
            return cpf;
        return cleanCpf;
    }
}
exports.Cpf = Cpf;
