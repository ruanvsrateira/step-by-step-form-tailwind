import { FormikProps } from "formik";
import { Input } from "../../components/Input";

interface Step2Props {
  formik: FormikProps<{
    email: string;
    password: string;
    confirmEmail: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }>;
}

export const Step2 = ({ formik }: Step2Props) => {
  return (
    <Input
      type="checkbox"
      name="acceptTerms"
      error={formik.errors.acceptTerms}
      onChange={formik.handleChange}
      placeholder="Eu confirmo que li e aceito os termos"
      value={formik.values.acceptTerms}
    />
  );
};
