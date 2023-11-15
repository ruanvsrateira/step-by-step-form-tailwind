import { object, ref, string } from "yup";

export const step0ValidationSchema = object({
  email: string().email("E-mail Inválido").required("campo obrigatorio"),
  confirmEmail: string()
    .required("Campo obrigatório")
    .oneOf([ref("email")], "E-mail não coincidem"),
});
