# Telefone/Celular

## Validação de Telefone/Celular

A validação de telefone/celular garante que o número informado siga o padrão brasileiro.

```typescript
import { Telefone } from "br-docs";

Telefone.isValid("(11) 99999-9999"); // true
Telefone.format("11999999999"); // '(11) 99999-9999'
Telefone.parse("(11) 99999-9999"); // '11999999999'
```

## Tipos de Telefone/Celular

- Com DDD e traço: `(11) 99999-9999`
- Apenas números: `11999999999`

## Tipos Typescript

O telefone é representado como string. As funções retornam string ou booleano.

```typescript
type TelefoneType = string;
function isValid(telefone: TelefoneType): boolean;
function format(telefone: TelefoneType): string;
function parse(telefone: string): TelefoneType;
```
