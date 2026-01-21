# Joi

## Integração com br-docs

A extensão de Joi do **br-docs** adiciona um novo tipo chamado `document` com regras específicas para documentos brasileiros.

### Instalação

```bash
npm i br-docs joi
```

### Uso básico

Temos duas opções para utilizar a extensão do **br-docs** com o **Joi**:

1. Utilizando a função `extendJoi` para criar uma instância estendida do Joi:

- `import { extendJoi } from "br-docs/joi";`
- O que possibilita a tipagem correta dos métodos adicionados.

2. Utilizando a extensão diretamente:

- `import { brDocsJoiExtension } from "br-docs/joi";`
- O que não traz a tipagem correta dos métodos adicionados. Devido a limitações do
  método de extensão do Joi.

```typescript
import Joi from "joi";
import { brDocsJoiExtension } from "br-docs/joi";

const joiExtend = Joi.extend(brDocsJoiExtension);

const testUser = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  email: "test@email.com",
  name: "Test User",
  age: 30,
  cpf: "798.642.200-98",
  cellphone: "(11) 91234-5678",
  cnpj: "12.345.678/0001-95",
  nis: "589.02102.27-5",
};

const userSchema = joiExtend.object({
  id: joiExtend.string().uuid().required(),
  email: joiExtend.string().email().required(),
  name: joiExtend.string().min(2).max(100).required(),
  age: joiExtend.number().integer().min(0).optional(),
  cpf: joiExtend.document().cpf().required(),
  cellphone: joiExtend.document().celular().optional(),
  cnpj: joiExtend.document().cnpj().optional(),
  nis: joiExtend.document().nis().optional(),
});

const validateUserSchema = userSchema.validate(testUser);
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
