# 🇧🇷 BR Docs · Validação e formatação de documentos brasileiros (TypeScript)

[![npm version](https://img.shields.io/npm/v/br-docs.svg)](https://www.npmjs.com/package/br-docs)
[![npm downloads](https://img.shields.io/npm/dw/br-docs.svg)](https://www.npmjs.com/package/br-docs)
[![license](https://img.shields.io/github/license/terukimateus/br-docs)](./LICENSE)

## ⭐ Destaque: suporte ao novo **CNPJ alfanumérico**

O **BR Docs** já está preparado para o cenário do **CNPJ alfanumérico** (novo padrão), mantendo a compatibilidade com o CNPJ numérico tradicional.

> Se você quer evitar retrabalho quando esse padrão virar comum no seu produto, já pode integrar agora.

---

Uma biblioteca **simples, modular e pronta para produção** para **validação**, **formatação** e **parsing** de documentos brasileiros — com foco em DX (Developer Experience), consistência e testes.

✅ TypeScript + tipagem forte
✅ API pequena e previsível (`isValid`, `format`, `parse`)
✅ Sem dependências pesadas
✅ Ideal para **APIs**, **front-ends**, **formularios**, **pipes/validators**, **middlewares** e **RPA**

---

## 📦 Instalação

```bash
npm install br-docs
# ou
yarn add br-docs
# ou
pnpm add br-docs
```

## ✅ Importação

```ts
import { Cpf, Cnpj, Email, Phone, Cep, Pix, Uuid, Cnh } from "br-docs";
```

---

## ⚡ Exemplo rápido (uso típico em validação de formulário)

```ts
import { Cpf, Email } from "br-docs";

const cpf = "123.456.789-09";
const email = "test@example.com";

if (!Cpf.isValid(cpf)) throw new Error("CPF inválido");
if (!Email.isValid(email)) throw new Error("Email inválido");
```

---

## 🧩 Documentos suportados

- **CPF** (validar / formatar / parse)
- **CNPJ** (inclui cenário **alfanumérico**) (validar / formatar / parse)
- **Telefone/Celular** (validar / formatar / parse)
- **CEP** (validar / formatar / parse)
- **Email** (validar)
- **PIX** (validar: CPF, CNPJ, email, telefone)
- **UUID** (validar)
- **CNH** (validar)
- **BOLETO BANCÁRIO** (validar / formatar / parse)

---

## 📘 Exemplos de uso

### CNPJ (com suporte ao padrão alfanumérico)

````ts
import { Cnpj } from "br-docs";

Cnpj.isValid("11.222.333/0001-81"); // true/false
Cnpj.format("11222333000181"); // "11.222.333/0001-81"
Cnpj.parse("11.222.333/0001-81"); // "11222333000181"

---

## 🧱 Interface genérica (API consistente)

Todos os módulos seguem um contrato simples e previsível:

```ts
export interface IValidator<T> {
  isValid(input: T): boolean;
}

export interface IFormatter<T> {
  format(input: T): string;
}

export interface IParser<T> {
  parse(input: T): string;
}

export interface IDocumentHandler<T>
  extends IValidator<T>, IFormatter<T>, IParser<T> {}
````

Isso facilita plugar em:

- pipes/validators (NestJS, Zod, Yup)
- middlewares/DTO validation
- componentes de input no front
- regras de domínio (clean architecture)

---

## 📚 Documentação completa

Acesse a documentação: [https://br-docs-1.gitbook.io/br-docs/](https://br-docs-1.gitbook.io/br-docs/)

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit (`git commit -m "feat: minha feature"`)
4. Push (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## Licença

ISC
