import { object, ref, string } from "yup";

export const step1ValidationSchema = object({
  password: string()
    .min(4, "A senha deve ter mais de 4 caractéres")
    .required("Campo obrigatório"),
  confirmPassword: string()
    .required("Campo obrigatório")
    .oneOf([ref("password")], "As Senhas não se coincidem"),
});
