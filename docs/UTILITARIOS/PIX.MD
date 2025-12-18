# Pix

## Validação de PIX

O PIX aceita diferentes tipos de chaves: CPF, CNPJ, email, telefone e chave aleatória. A validação garante que a chave informada seja válida para o padrão aceito.

```typescript
import { Pix } from "br-docs";

Pix.isValid("123.456.789-09"); // true
Pix.isValid("test@example.com"); // true
Pix.isValid("(11) 99999-9999"); // true
Pix.isValid("12.345.678/0001-95"); // true
```

## Formatação de PIX

A função `Pix.format` aceita uma chave e formata automaticamente conforme o tipo detectado. Também é possível forçar o tipo ao passar o segundo argumento (`"celular" | "cpf" | "cnpj" | "email" | "uuid"`). Caso o tipo não possa ser identificado, lança erro com a mensagem `"Tipo de Pix inválido"`.

```typescript
Pix.format("11987654321"); // (11) 98765-4321
Pix.format("12345678909"); // 123.456.789-09
Pix.format("11222333000181"); // 11.222.333/0001-81
Pix.format("user@example.com"); // user@example.com
Pix.format("123e4567e89b12d3a456426614174000"); // 123e4567-e89b-12d3-a456-426614174000
```

## Parsing de PIX

Use `Pix.parse` para obter o valor bruto (sem máscaras). Assim como no `format`, o tipo é detectado automaticamente ou pode ser informado explicitamente. Quando a chave não é reconhecida, a função lança `"Tipo de Pix inválido"`.

```typescript
Pix.parse("(11) 98765-4321"); // 11987654321
Pix.parse("123.456.789-09"); // 12345678909
Pix.parse("11.222.333/0001-81"); // 11222333000181
Pix.parse(" Valid@Valid.com  ", "email"); // valid@valid.com
Pix.parse("123e4567-e89b-12d3-a456-426614174000"); // 123e4567e89b12d3a456426614174000
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
function isValid(pix: string): boolean;
```
