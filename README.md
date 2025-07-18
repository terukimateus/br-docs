# BR Docs

Utilitários para validação, formatação e parsing de documentos brasileiros.

## Instalação

```bash
npm install br-docs
```

## Importação

```typescript
import { Cpf, Cnpj } from "br-docs";
```

## Uso

### CPF

```typescript
import { Cpf } from "br-docs";

Cpf.isValid("123.456.789-09"); // true

Cpf.format("12345678909"); // '123.456.789-09'

Cpf.parse("123.456.789-09"); // '12345678909'
```

### Telefone/Celular

```typescript
import { Phone } from "br-docs";

Phone.isValid("(11) 99999-9999"); // true

Phone.format("11999999999"); // '(11) 99999-9999'

Phone.parse("(11) 99999-9999"); // '11999999999'
```

### CEP

```typescript
import { Cep } from "br-docs";

Cep.isValid("01234-567"); // true

Cep.format("01234567"); // '01234-567'

Cep.parse("01234-567"); // '01234567'
```

### CNPJ

```typescript
import { Cnpj } from "br-docs";

Cnpj.isValid("11.222.333/0001-81"); // true

Cnpj.format("11222333000181"); // '11.222.333/0001-81'

Cnpj.parse("11.222.333/0001-81"); // '11222333000181'
```

### Email

```typescript
import { Email } from "br-docs";

Email.isValid("test@example.com"); // true/false
```

### PIX

```typescript
import { Pix } from "br-docs";

Pix.isValid("123.456.789-09"); // true
Pix.isValid("test@example.com"); // true
Pix.isValid("(11) 99999-9999"); // true
Pix.isValid("12.345.678/0001-95"); //true
```

### UUID

```typescript
import { Uuid } from "br-docs";

Uuid.isValid("550e8400-e29b-41d4-a716-446655440000"); // true/false
```

### CNH

```typescript
import { Cnh } from "br-docs";

Cnh.isValid("12345678901"); // true
```

## Interface Genérica

Todos os módulos implementam a interface `IGeneric<T>`:

```typescript
export interface IGeneric<T> {
  isValid(input: T): boolean;
  format(input: T): string;
  parse(input: T): string;
}
```

# Docs

[Clique aqui para acessar a documentação completa](https://br-docs-1.gitbook.io/br-docs/)

## Licença

ISC
