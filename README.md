# BR Docs

Utilitários para validação, formatação e parsing de documentos brasileiros.

## Instalação

```bash
npm install br-docs
```

## Importação

```typescript
// Importação apenas do que for usar
import { Cpf, Cnpj } from "br-docs";
```

## Uso

### CPF

```typescript
import { Cpf } from "br-docs";

// Validar CPF
Cpf.isValid("123.456.789-09"); // true

// Formatar CPF
Cpf.format("12345678909"); // '123.456.789-09'

// Extrair apenas números
Cpf.parse("123.456.789-09"); // '12345678909'
```

### Telefone/Celular

```typescript
import { Phone } from "br-docs";

// Validar telefone
Phone.isValid("(11) 99999-9999"); // true

// Formatar telefone
Phone.format("11999999999"); // '(11) 99999-9999'

// Extrair apenas números
Phone.parse("(11) 99999-9999"); // '11999999999'
```

### CEP

```typescript
import { Cep } from "br-docs";

// Validar CEP
Cep.isValid("01234-567"); // true

// Formatar CEP
Cep.format("01234567"); // '01234-567'

// Extrair apenas números
Cep.parse("01234-567"); // '01234567'
```

### CNPJ

```typescript
import { Cnpj } from "br-docs";

// Validar CNPJ
Cnpj.isValid("11.222.333/0001-81"); // true

// Formatar CNPJ
Cnpj.format("11222333000181"); // '11.222.333/0001-81'

// Extrair apenas números
Cnpj.parse("11.222.333/0001-81"); // '11222333000181'
```

### Email

```typescript
import { Email } from "br-docs";

// Validar email
Email.isValid("test@example.com"); // true/false
```

### PIX

```typescript
import { Pix } from "br-docs";

// Validar chave PIX (suporta CPF, CNPJ, email, telefone e chave aleatória)
Pix.isValid("123.456.789-09"); // true
Pix.isValid("test@example.com"); // true
Pix.isValid("(11) 99999-9999"); // true
Pix.isValid("12.345.678/0001-95"); //true
```

### UUID

```typescript
import { Uuid } from "br-docs";

// Validar UUID
Uuid.isValid("550e8400-e29b-41d4-a716-446655440000"); // true/false
```

### CNH

```typescript
import { Cnh } from "br-docs";

// Validar CNH
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
