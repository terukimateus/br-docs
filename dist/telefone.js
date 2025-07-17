"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
const cleanString_1 = __importDefault(require("./utils/cleanString"));
const TELEFONE_REGEX = /^(1[1-9]|2[1-2]|24|2[2-8]|3[1-5]|3[7-8]|4[1-9]|51|5[3-5]|6[1-9]|71|7[3-5]|77|79|8[1-9]|9[1-9])\d{8}$/;
class Telefone {
    constructor(phone) {
        this.phone = phone;
    }
    isValid() {
        return Telefone.isValid(this.phone);
    }
    format() {
        return Telefone.format(this.phone);
    }
    parse() {
        return Telefone.parse(this.phone);
    }
    /**
     * Valida um número de telefone.
     *
     * @param phone - O número de telefone a ser validado.
     * @returns boolean - Retorna true se o número for válido, caso contrário false.
     */
    static isValid(phone) {
        if (!phone)
            return false;
        const cleanPhone = (0, cleanString_1.default)(phone);
        if (cleanPhone.length !== 10)
            return false;
        return TELEFONE_REGEX.test(cleanPhone);
    }
    /**
     * Formata um número de telefone.
     *
     * @param phone - O número de telefone a ser formatado.
     * @returns string - Retorna o número formatado.
     */
    static format(phone) {
        const cleanPhone = (0, cleanString_1.default)(phone);
        const length = cleanPhone.length;
        if (length === 10) {
            return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        }
        return phone;
    }
    /**
     * Faz o parsing de um número de telefone.
     * Remove todos os caracteres não numéricos do telefone.
     *
     * @param phone - O número de telefone a ser parseado.
     * @returns string - Retorna o telefone parseado.
     */
    static parse(phone) {
        const cleanPhone = (0, cleanString_1.default)(phone);
        return cleanPhone;
    }
}
exports.Telefone = Telefone;
