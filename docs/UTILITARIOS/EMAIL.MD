# Email

## Validação de Email

A validação de email garante que o endereço informado siga o padrão aceito para emails válidos.

```typescript
import { Email } from "br-docs";

Email.isValid("test@example.com"); // true/false
```

## Tipos de Email

O email é sempre representado como uma string.

- Exemplo: `test@example.com`

## Tipos Typescript

O email é representado no TypeScript como uma string, e a função de validação retorna um booleano.

```typescript
type EmailType = string;
function isValid(email: EmailType): boolean;
```
