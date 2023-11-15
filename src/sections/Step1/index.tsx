import { FormikProps } from "formik";
import { Input } from "../../components/Input";

interface Step1Props {
  formik: FormikProps<{
    email: string;
    password: string;
    confirmEmail: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }>;
}

export const Step1 = ({ formik }: Step1Props) => {
  return (
    <>
      <Input
        type="input"
        name="password"
        error={formik.errors.password}
        onChange={formik.handleChange}
        placeholder="Digite uma boa senha"
        value={formik.values.password}
      />
      <Input
        type="input"
        name="confirmPassword"
        error={formik.errors.confirmPassword}
        onChange={formik.handleChange}
        placeholder="Confirme novamente sua senha"
        value={formik.values.confirmPassword}
      />
    </>
  );
};
