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
import validator from "br-docs/joi";

const joiExtend = Joi.extend(validator);

const userSchema = joiExtend.object({
  id: joiExtend.string().uuid().required(),
  email: joiExtend.string().email().required(),
  name: joiExtend.string().min(2).max(100).required(),
  age: joiExtend.number().integer().min(0).optional(),
  cpf: joiExtend.string().cpf().required(),
  cellphone: joiExtend.string().celular().optional(),
});
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
