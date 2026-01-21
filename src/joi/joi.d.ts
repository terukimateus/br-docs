import "joi";
import type Joi from "joi";

declare module "joi" {
  interface DocumentSchema extends Joi.StringSchema {
    cpf(): this;
    cnpj(): this;
    nis(): this;
    cnh(): this;
    cep(): this;
    phone(): this;
    pix(): this;
    boleto(): this;
    celular(): this;
  }

  interface Root {
    document(): DocumentSchema;
  }
}
