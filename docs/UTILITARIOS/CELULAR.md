# Celular

## Validação de Celular

A validação de celular garante que o número informado siga o padrão brasileiro.

```typescript
import { Celular } from "br-docs";
Celular.isValid("(11) 99999-9999"); // true
Celular.format("11999999999"); // '(11) 99999-9999'
Celular.parse("(11) 99999-9999"); // '11999999999'
```

## Tipos de Celular

- Com DDD e traço: `(11) 99999-9999`
- Apenas números: `11999999999`

## Tipos Typescript

O celular é representado como string. As funções retornam string ou booleano.

```typescript
type CelularType = string;
function isValid(celular: CelularType): boolean;
function format(celular: CelularType): string;
function parse(celular: string): CelularType;
```
