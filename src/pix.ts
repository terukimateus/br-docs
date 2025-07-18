import { IDocumentHandler } from ".";
import { Celular } from "./celular";
import { Cpf } from "./cpf";
import { Email } from "./email";
import { Uuid } from "./uuid";
import { Cnpj } from "./cnpj";

type PixTypes = "celular" | "cpf" | "email" | "uuid";

const formatPixTypes: Record<PixTypes, (pix: string) => string> = {
  celular: (pix) => Celular.format(pix),
  cpf: (pix) => Cpf.format(pix),
  email: (pix) => pix,
  uuid: (pix) => Uuid.format(pix),
};

export class Pix implements Omit<IDocumentHandler<string>, "parse"> {
  constructor(private pix: string) {}

  isValid(): boolean {
    return Pix.isValid(this.pix);
  }

  format(): string {
    return Pix.format(this.pix, "uuid");
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
      Celular.isValid(pix) ||
      Uuid.isValid(pix) ||
      Cnpj.isValid(pix) ||
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
  static format(pix: string, type: PixTypes): string {
    return formatPixTypes[type](pix);
  }
}
