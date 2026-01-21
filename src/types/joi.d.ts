import "joi";

declare module "joi" {
  interface DocumentSchema extends StringSchema {
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
