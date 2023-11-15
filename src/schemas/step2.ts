import { bool, object } from "yup";

export const step2ValidationSchema = object({
  acceptTerms: bool().oneOf(
    [true],
    "Para finalizar você deve aceitar os termos"
  ),
});
