# Telefone

## Validação de Telefone

A validação de telefone garante que o número informado siga o padrão brasileiro.

```typescript
import { Telefone } from "br-docs";

Telefone.isValid("(11) 3265-4321"); // true
Telefone.format("1132654321"); // '(11) 3265-4321'
Telefone.parse("(11) 3265-4321"); // '1132654321'
```

## Tipos de Telefone

- Com DDD e traço: `(11) 9999-9999`
- Apenas números: `1199999999`

## Tipos Typescript

O telefone é representado como string. As funções retornam string ou booleano.

```typescript
type TelefoneType = string;
function isValid(telefone: TelefoneType): boolean;
function format(telefone: TelefoneType): string;
function parse(telefone: string): TelefoneType;
```
