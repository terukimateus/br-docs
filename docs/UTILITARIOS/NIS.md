# NIS

## Validação de NIS

O NIS (Número de Identificação Social), também conhecido como NIT/PIS/PASEP, é um número de 11 dígitos utilizado para identificar o trabalhador. A validação garante que o número informado é consistente.

```typescript
import { Nis } from "br-docs";

Nis.isValid("123.45678.90-1"); // true
Nis.format("12345678901"); // '123.45678.90-1'
Nis.parse("123.45678.90-1"); // '12345678901'
```

## Tipos de NIS

- Com pontos e traço: `123.45678.90-1`
- Apenas números: `12345678901`

## Lógica de validação

A validação segue o cálculo do dígito verificador (DV) a partir dos 10 primeiros dígitos:

1. Remova caracteres não numéricos.
2. Verifique se o tamanho é 11 e se não é uma sequência repetida (ex.: `00000000000`).
3. Separe os 10 primeiros dígitos e multiplique cada posição pelos pesos fixos: `3, 2, 9, 8, 7, 6, 5, 4, 3, 2`.
4. Some os resultados e calcule $dv = 11 - (soma \bmod 11)$.
5. Se $dv$ for 10 ou 11, considere $dv = 0$.
6. O NIS é válido quando o $dv$ calculado é igual ao último dígito.

## Tipos Typescript

O NIS é representado no TypeScript como uma string, e as funções de validação, formatação e parsing retornam strings ou booleanos.

```typescript
type NisType = string;
function isValid(nis: NisType): boolean;
function format(nis: NisType): string;
function parse(nis: string): NisType;
```
