"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cep = void 0;
const cleanString_1 = __importDefault(require("./utils/cleanString"));
class Cep {
    constructor(cep) {
        this.cep = cep;
    }
    isValid() {
        return Cep.isValid(this.cep);
    }
    format() {
        return Cep.format(this.cep);
    }
    parse() {
        return Cep.parse(this.cep);
    }
    /**
     * Valida um CEP brasileiro.
     * Aceita formatos com ou sem hífen, e retorna true se o CEP for válido.
     *
     * @param cep - O CEP a ser validado.
     * @returns boolean - Retorna true se o CEP for válido, caso contrário false.
     */
    static isValid(cep) {
        if (!cep)
            return false;
        const cleanCep = (0, cleanString_1.default)(cep);
        return /^[0-9]{5}-?[0-9]{3}$/.test(cleanCep);
    }
    /**
     * Formata um CEP brasileiro.
     * Aceita formatos com ou sem hífen, e retorna o CEP formatado.
     *
     * @param cep - O CEP a ser formatado.
     * @returns string - Retorna o CEP formatado.
     */
    static format(cep) {
        const cleanCep = (0, cleanString_1.default)(cep);
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
    static parse(cep) {
        return (0, cleanString_1.default)(cep);
    }
}
exports.Cep = Cep;
