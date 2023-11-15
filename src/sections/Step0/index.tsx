import { FormikProps } from "formik";
import { Input } from "../../components/Input";

interface Step0Props {
  formik: FormikProps<{
    email: string;
    password: string;
    confirmEmail: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }>;
}

export const Step0 = ({ formik }: Step0Props) => {
  return (
    <>
      <Input
        type="input"
        name="email"
        error={formik.errors.email}
        onChange={formik.handleChange}
        placeholder="Digite seu melhor e-mail"
        value={formik.values.email}
      />
      <Input
        type="input"
        name="confirmEmail"
        error={formik.errors.confirmEmail}
        onChange={formik.handleChange}
        placeholder="Confirme novamente seu e-mail"
        value={formik.values.confirmEmail}
      />
    </>
  );
};
