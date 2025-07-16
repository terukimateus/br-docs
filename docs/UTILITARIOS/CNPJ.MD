# Cnpj

## Validação de CNPJ

O CNPJ (Cadastro Nacional da Pessoa Jurídica) é um documento brasileiro utilizado para identificar empresas. A validação do CNPJ garante que o número informado seja válido.

```typescript
import { Cnpj } from "br-docs";

Cnpj.isValid("11.222.333/0001-81"); // true
Cnpj.format("11222333000181"); // '11.222.333/0001-81'
Cnpj.parse("11.222.333/0001-81"); // '11222333000181'
```

## Tipos de CNPJ

O CNPJ pode ser representado de diferentes formas, como:

- Com pontos, barra e traço: `11.222.333/0001-81`
- Apenas números: `11222333000181`

## Tipos Typescript

O CNPJ é representado no TypeScript como uma string, e as funções de validação, formatação e parsing retornam strings ou booleanos.

```typescript
type CnpjType = string;
function isValid(cnpj: CnpjType): boolean;
function format(cnpj: CnpjType): string;
function parse(cnpj: string): CnpjType;
```
