# CEP

## Validação de CEP

O CEP (Código de Endereçamento Postal) é utilizado para identificar localidades no Brasil. A validação garante que o valor informado siga o padrão correto.

```typescript
import { Cep } from "br-docs";

Cep.isValid("01234-567"); // true
Cep.format("01234567"); // '01234-567'
Cep.parse("01234-567"); // '01234567'
```

## Tipos de CEP

- Com traço: `01234-567`
- Apenas números: `01234567`

## Tipos Typescript

O CEP é representado como string. As funções retornam string ou booleano.

```typescript
type CepType = string;
function isValid(cep: CepType): boolean;
function format(cep: CepType): string;
function parse(cep: string): CepType;
```
