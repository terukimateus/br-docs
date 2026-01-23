# Exemplos (br-docs)

Este documento mostra exemplos práticos usando o `br-docs` em:

- ✅ Front-end com **react-final-form**
- ✅ Back-end com **Joi** via `extendJoi` (`br-docs/joi`)

---

## Instalação

```bash
npm i br-docs
```

Ou com Yarn:

```bash
yarn add br-docs
```

## Exemplo 1 — React + react-final-form

```tsx
import React from "react";
import { Form, Field } from "react-final-form";
import { Cpf } from "br-docs";

type Values = {
  cpf: string;
};

const validateCpfField = (value: string) => {
  const isValid = Cpf.validate(value);
  if (!isValid) {
    return "CPF inválido";
  }
};

export function ExampleCpfFinalForm() {
  const onSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <Form<Values>
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        values,
        hasValidationErrors,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field<string>
            name="cpf"
            validate={validateCpfField}
            parse={Cpf.parse}
            format={Cpf.format}
          >
            {({ input, meta }) => (
              <div style={{ display: "grid", gap: 6 }}>
                <label>CPF</label>
                <input {...input} placeholder="000.000.000-00" />
                {meta.touched && meta.error && (
                  <small style={{ color: "crimson" }}>{meta.error}</small>
                )}
              </div>
            )}
          </Field>

          <button type="submit" disabled={submitting || hasValidationErrors}>
            Enviar
          </button>
        </form>
      )}
    />
  );
}
```

## Exemplo 2 — Node.js + Joi (br-docs/joi)

### Instalação

```bash
npm i br-docs joi
```

```ts
import Joi from "joi";
import { extendJoi } from "br-docs/joi";

const joiExtend = extendJoi(Joi);

const testUser = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  email: "test@test.com",
  name: "Test User",
  cpf: "798.642.200-98",
  cellphone: "(11) 91234-5678",
};

const userSchema = joiExtend.object({
  id: joiExtend.string().uuid().required(),
  email: joiExtend.string().email().required(),
  name: joiExtend.string().min(2).max(100).required(),
  cpf: joiExtend.document().cpf().required(),
  cellphone: joiExtend.document().celular().optional(),
});

const validateUserSchema = userSchema.validate(testUser);
```
