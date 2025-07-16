# CNH

## Validação de CNH

A CNH (Carteira Nacional de Habilitação) é o documento de habilitação de condutores no Brasil. A validação garante que o número informado seja válido.

```typescript
import { Cnh } from "br-docs";

Cnh.isValid("12345678901"); // true
```

## Tipos de CNH

- Apenas números: `12345678901`

## Tipos Typescript

A CNH é representada como string. A função de validação retorna booleano.

```typescript
type CnhType = string;
function isValid(cnh: CnhType): boolean;
```
