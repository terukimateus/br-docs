import { IDocumentHandler } from ".";
import clean from "./utils/cleanString";

const NIS_WEIGHTS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2] as const;

const calcNisDigit = (tenDigits: string): number => {
  const sum = tenDigits
    .split("")
    .map((d, i) => parseInt(d, 10) * NIS_WEIGHTS[i])
    .reduce((a, b) => a + b, 0);

  let dv = 11 - (sum % 11);
  if (dv === 10 || dv === 11) dv = 0;
  return dv;
};

export class Nis implements IDocumentHandler<string> {
  constructor(private nis: string) {}

  isValid(): boolean {
    return Nis.isValid(this.nis);
  }

  format(): string {
    return Nis.format(this.nis);
  }

  parse(): string {
    return Nis.parse(this.nis);
  }

  static isValid(nis: string): boolean {
    if (!nis) return false;

    const cleanNis = clean(nis);
    if (cleanNis.length !== 11) return false;
    if (/^(\d)\1+$/.test(cleanNis)) return false;

    const base = cleanNis.slice(0, 10);
    const dv = parseInt(cleanNis[10], 10);

    return calcNisDigit(base) === dv;
  }

  static format(nis: string): string {
    const cleanNis = clean(nis);
    if (cleanNis.length !== 11) return nis;

    return cleanNis.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, "$1.$2.$3-$4");
  }

  static parse(nis: string): string {
    const cleanNis = clean(nis);
    if (cleanNis.length !== 11) return nis;
    return cleanNis;
  }
}
