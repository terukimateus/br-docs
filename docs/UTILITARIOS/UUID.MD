# Uuid

## Validação de UUID

O UUID (Universally Unique Identifier) é um identificador único universal. A validação garante que o valor informado siga o padrão UUID.

```typescript
import { Uuid } from "br-docs";

Uuid.isValid("550e8400-e29b-41d4-a716-446655440000"); // true/false
```

## Tipos de UUID

- Exemplo: `550e8400-e29b-41d4-a716-446655440000`

## Tipos Typescript

O UUID é representado como string. A função de validação retorna booleano.

```typescript
type UuidType = string;
function isValid(uuid: UuidType): boolean;
```
