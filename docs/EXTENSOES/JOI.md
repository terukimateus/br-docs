# Joi

## Integração com br-docs

A extensão de Joi do **br-docs** adiciona um novo tipo chamado `document` com regras específicas para documentos brasileiros.

### Instalação

```bash
npm i br-docs joi
```

### Uso básico

```typescript
import Joi from "joi";
import documentExtension from "br-docs/joi";

const JoiExtended = Joi.extend(documentExtension);

const schema = JoiExtended.object({
  cpf: JoiExtended.document().cpf().required(),
  cnpj: JoiExtended.document().cnpj().required(),
  nis: JoiExtended.document().nis().required(),
  cnh: JoiExtended.document().cnh().required(),
  cep: JoiExtended.document().cep().required(),
  telefone: JoiExtended.document().phone().required(),
  pix: JoiExtended.document().pix().required(),
  boleto: JoiExtended.document().boleto().required(),
  celular: JoiExtended.document().celular().required(),
});

const result = schema.validate({
  cpf: "123.456.789-09",
  cnpj: "11.222.333/0001-81",
  nis: "123.45678.90-1",
  cnh: "02650306461",
  cep: "01001-000",
  telefone: "(11) 3456-7890",
  pix: "email@dominio.com",
  boleto: "34191.79001 01043.510047 91020.150008 6 84570000002000",
  celular: "(11) 98765-4321",
});

if (result.error) {
  console.error(result.error.details);
}
```

## Regras disponíveis

As regras abaixo validam o valor e retornam erro com mensagens específicas:

- `document().cpf()` — CPF inválido
- `document().cnpj()` — CNPJ inválido
- `document().nis()` — NIS inválido
- `document().cnh()` — CNH inválida
- `document().cep()` — CEP inválido
- `document().phone()` — Telefone inválido
- `document().pix()` — Chave PIX inválida
- `document().boleto()` — Boleto inválido
- `document().celular()` — Celular inválido

## Mensagens de erro personalizadas

Você pode customizar mensagens normalmente pelo Joi:

```typescript
const schema = JoiExtended.object({
  cpf: JoiExtended.document().cpf().messages({
    "document.cpf": "CPF informado não é válido",
  }),
});
```
