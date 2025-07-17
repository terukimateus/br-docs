"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
const cleanString_1 = __importDefault(require("./utils/cleanString"));
const PHONE_LENGTHS_REGEX = {
    10: /^(\d{2})(\d{4})(\d{4})$/,
    11: /^(\d{2})(\d{5})(\d{4})$/,
};
const REGEX_PHONE = /^(1[1-9]|2[1-2]|24|2[2-8]|3[1-5]|3[7-8]|4[1-9]|51|5[3-5]|6[1-9]|71|7[3-5]|77|79|8[1-9]|9[1-9])9\d{8}$/;
/** * Classe para validação e formatação de números de telefone celular.
 * Aceita formatos com ou sem DDD, e retorna true se o número for válido.
 * Exemplo: "11987654321" ou "(11) 98765-4321".
 * @class Celular
 * @implements {IGeneric<"celular">}
 * @param {string} phone Número de telefone a ser validado.
 * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
 */
class Celular {
    constructor(phone) {
        this.phone = phone;
    }
    isValid() {
        return Celular.isValid(this.phone);
    }
    format() {
        return Celular.format(this.phone);
    }
    parse() {
        return Celular.parse(this.phone);
    }
    /**
     * Valida um número de telefone celular.
     * Aceita formatos com ou sem DDD, e retorna true se o número for válido.
     *
     * @param {string} phone Número de telefone a ser validado.
     * @returns {boolean} Verdadeiro se o número for válido, caso contrário falso.
     */
    static isValid(phone) {
        if (!phone)
            return false;
        const cleanPhone = (0, cleanString_1.default)(phone);
        return REGEX_PHONE.test(cleanPhone);
    }
    /**
     * Formata um número de telefone celular.
     * Aceita formatos com ou sem DDD, e retorna o número formatado.
     *
     * @param {string} phone Número de telefone a ser formatado.
     * @returns {string} Número formatado.
     */
    static format(phone) {
        const cleanPhone = (0, cleanString_1.default)(phone);
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
    static parse(phone) {
        const cleanPhone = (0, cleanString_1.default)(phone);
        return cleanPhone;
    }
}
exports.Celular = Celular;
