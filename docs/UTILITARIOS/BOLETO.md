# Boleto

## Validação de Boleto

A validação de boleto garante que o número informado siga o padrão brasileiro.
Podendo ser do tipo "Arrecadação" de 48 dígitos ou "Cobrança" de 47 dígitos.

```typescript
import { Boleto } from "br-docs";

Boleto.isValid("42297.11504 00064.897317 04445.119722 2 11700000010392"); // true
Boleto.format("42297115040006489731707506.739429 1 11700000010400");
// 42297.11504 00064.897317 07506.739429 1 11700000010400
Boleto.parse("42297.11504 00064.897317 07506.739429 1 11700000010400");
// 42297115040006489731707506739429111700000010400
```

## Tipos de Boleto

- Arrecadação(48 dígitos)
- Cobrança(47 dígitos)

## Tipos Typescript

O boleto é representado como string. As funções retornam string ou booleano.
