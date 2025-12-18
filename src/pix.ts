import { IDocumentHandler } from ".";
import { Celular } from "./celular";
import { Cpf } from "./cpf";
import { Email } from "./email";
import { Uuid } from "./uuid";
import { Cnpj } from "./cnpj";

type PixTypes = "celular" | "cpf" | "cnpj" | "email" | "uuid";

const formatPixTypes: Record<PixTypes, (pix: string) => string> = {
  celular: (pix) => Celular.format(pix),
  cpf: (pix) => Cpf.format(pix),
  email: (pix) => pix,
  uuid: (pix) => Uuid.format(pix),
  cnpj: (pix) => Cnpj.format(pix),
};

const parsePixTypes: Record<PixTypes, (pix: string) => string> = {
  celular: (pix) => Celular.parse(pix),
  cpf: (pix) => Cpf.parse(pix),
  email: (pix) => Email.parse(pix),
  uuid: (pix) => Uuid.parse(pix),
  cnpj: (pix) => Cnpj.parse(pix),
};

const identifyPixType = (pix: string): PixTypes | null => {
  if (Cpf.isValid(pix)) return "cpf";
  if (Cnpj.isValid(pix)) return "cnpj";
  if (Email.isValid(pix)) return "email";
  if (Uuid.isValid(pix)) return "uuid";
  if (Celular.isValid(pix)) return "celular";
  return null;
};

export class Pix implements IDocumentHandler<string> {
  constructor(private pix: string) {}

  isValid(): boolean {
    return Pix.isValid(this.pix);
  }

  format(): string {
    return Pix.format(this.pix);
  }

  parse(): string {
    return Pix.parse(this.pix);
  }
  /**
   * Valida um Pix.
   * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna true se o Pix for válido.
   * @param pix - O Pix a ser validado.
   * @returns boolean - Retorna true se o Pix for válido, caso contrário false.
   */
  static isValid(pix: string): boolean {
    if (!pix) return false;

    return (
      Cpf.isValid(pix) ||
      Cnpj.isValid(pix) ||
      Celular.isValid(pix) ||
      Uuid.isValid(pix) ||
      Email.isValid(pix)
    );
  }
  /**
   * Formata um Pix.
   * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna o Pix formatado.
   * @param pix - O Pix a ser formatado.
   * @param type - O tipo de Pix a ser formatado.
   * @returns string - Retorna o Pix formatado.
   */
  static format(pix: string, type?: PixTypes): string {
    if (!type) {
      const identifiedType = identifyPixType(pix);

      if (!identifiedType) {
        throw new Error("Tipo de Pix inválido");
      }

      type = identifiedType;
    }

    return formatPixTypes[type](pix);
  }

  /**
   * Faz o parsing de um Pix.
   * Aceita formatos de celular, CPF, CNPJ, email e UUID, e retorna o Pix em formato bruto.
   * @param pix - O Pix a ser parseado.
   * @param type - O tipo de Pix a ser parseado.
   * @returns string - Retorna o Pix em formato bruto.
   */
  static parse(pix: string, type?: PixTypes): string {
    if (!type) {
      const identifiedType = identifyPixType(pix);

      if (!identifiedType) {
        throw new Error("Tipo de Pix inválido");
      }

      type = identifiedType;
    }

    return parsePixTypes[type](pix);
  }
}
