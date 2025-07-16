# Email

## Validação de CPF

O CPF (Cadastro de Pessoas Físicas) é um documento brasileiro utilizado para identificar cidadãos. A validação do CPF é importante para garantir que o número informado seja válido e não contenha erros.

```typescript
import { Cpf } from "br-docs";

Cpf.isValid("123.456.789-09"); // true
Cpf.format("12345678909"); // '123.456.789-09'
Cpf.parse("123.456.789-09"); // '12345678909'
```

## Tipos de CPF

O CPF pode ser representado de diferentes formas, como:

- Com pontos e traço: `123.456.789-09`
- Apenas números: `12345678909`

## Tipos Typescript

O CPF é representado no TypeScript como uma string, e as funções de validação, formatação e parsing retornam strings ou booleanos.

```typescript
type CpfType = string;
function isValid(cpf: CpfType): boolean;
function format(cpf: CpfType): string;
function parse(cpf: string): CpfType;
```
