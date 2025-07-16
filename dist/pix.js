"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
const celular_1 = require("./celular");
const cpf_1 = require("./cpf");
const email_1 = require("./email");
const uuid_1 = require("./uuid");
const cnpj_1 = require("./cnpj");
const formatPixTypes = {
    celular: (pix) => celular_1.Celular.format(pix),
    cpf: (pix) => cpf_1.Cpf.format(pix),
    email: (pix) => pix,
    uuid: (pix) => uuid_1.Uuid.format(pix),
};
class Pix {
    constructor(pix) {
        this.pix = pix;
    }
    isValid() {
        return Pix.isValid(this.pix);
    }
    format() {
        return Pix.format(this.pix, "uuid");
    }
    /**
     * Valida um Pix.
     * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna true se o Pix for válido.
     * @param pix - O Pix a ser validado.
     * @returns boolean - Retorna true se o Pix for válido, caso contrário false.
     */
    static isValid(pix) {
        if (!pix)
            return false;
        return (cpf_1.Cpf.isValid(pix) ||
            celular_1.Celular.isValid(pix) ||
            uuid_1.Uuid.isValid(pix) ||
            cnpj_1.Cnpj.isValid(pix) ||
            email_1.Email.isValid(pix));
    }
    /**
     * Formata um Pix.
     * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna o Pix formatado.
     * @param pix - O Pix a ser formatado.
     * @param type - O tipo de Pix a ser formatado.
     * @returns string - Retorna o Pix formatado.
     */
    static format(pix, type) {
        return formatPixTypes[type](pix);
    }
}
exports.Pix = Pix;
