# PIX

## Validação de PIX

O PIX aceita diferentes tipos de chaves: CPF, CNPJ, email, telefone e chave aleatória. A validação garante que a chave informada seja válida para o padrão aceito.

```typescript
import { Pix } from "br-docs";

Pix.isValid("123.456.789-09"); // true
Pix.isValid("test@example.com"); // true
Pix.isValid("(11) 99999-9999"); // true
Pix.isValid("12.345.678/0001-95"); // true
```

## Tipos de PIX

- CPF: `123.456.789-09` ou `12345678909`
- CNPJ: `11.222.333/0001-81` ou `11222333000181`
- Email: `test@example.com`
- Telefone: `(11) 99999-9999` ou `11999999999`
- Chave aleatória: UUID

## Tipos Typescript

A chave PIX é representada como string. A função de validação retorna booleano.

```typescript
type PixType = string;
function isValid(pix: PixType): boolean;
```
