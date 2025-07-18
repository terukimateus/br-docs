import { IDocumentHandler } from ".";

export class Uuid implements Omit<IDocumentHandler<string>, "format"> {
  constructor(private uuid: string) {}

  isValid() {
    return Uuid.isValid(this.uuid);
  }

  parse() {
    return Uuid.parse(this.uuid);
  }
  /**
   * Valida um UUID.
   * Aceita formatos comuns de UUID e retorna true se o UUID for válido.
   * @param uuid - O UUID a ser validado.
   * @returns boolean - Retorna true se o UUID for válido, caso contrário false.
   */
  static isValid(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
  /**
   * Formata um UUID.
   * Aceita formatos com ou sem hífen, e retorna o UUID formatado.
   * @param uuid - O UUID a ser formatado.
   * @returns string - Retorna o UUID formatado.
   */
  static format(uuid: string): string {
    const cleanUuid = uuid.replace(/-/g, "");
    return cleanUuid.replace(
      /([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})/i,
      "$1-$2-$3-$4-$5"
    );
  }
  /**
   * Faz o parsing de um UUID.
   * Remove todos os hífens do UUID.
   * @param uuid - O UUID a ser parseado.
   * @returns string - Retorna o UUID parseado.
   */
  static parse(uuid: string): string {
    return uuid.replace(/-/g, "");
  }
}
