import { useFormik } from "formik";
import { useState } from "react";
import { bool, object, ref, string } from "yup";
import { GoArrowLeft, GoArrowRight, GoCheck } from "react-icons/go";
import { Input } from "./components/Input";
import { Button } from "./Button";
import { StepIndicator } from "./components/StepIndicator";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    {
      step: 0,
      title: "Configuração de E-mail",
      status: "not finalized",
      validationSchema: object({
        email: string().email("E-mail Inválido").required("campo obrigatorio"),
        confirmEmail: string()
          .required("Campo obrigatório")
          .oneOf([ref("email")], "E-mail não coincidem"),
      }),
    },
    {
      step: 1,
      title: "Configuração de senha",
      status: "not finalized",
      validationSchema: object({
        password: string()
          .min(4, "A senha deve ter mais de 4 caractéres")
          .required("Campo obrigatório"),
        confirmPassword: string()
          .required("Campo obrigatório")
          .oneOf([ref("password")], "As Senhas não se coincidem"),
      }),
    },
    {
      step: 2,
      title: "Termos de Privacidade",
      status: "not finalized",
      validationSchema: object({
        acceptTerms: bool().oneOf(
          [true],
          "Para finalizar você deve aceitar os termos"
        ),
      }),
    },
  ];

  function handlePreviousStep() {
    setCurrentStep((p) => p - 1);
  }

  function handleNextStep() {
    setCurrentStep((p) => p + 1);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmEmail: "",
      confirmPassword: "",
      acceptTerms: true,
    },
    validationSchema: steps[currentStep].validationSchema,
    onSubmit: (values) => {
      if (currentStep == steps.length - 1) {
        alert(JSON.stringify(values));
        return;
      }
      return handleNextStep();
    },
    validateOnChange: true,
  });

  return (
    <main className="bg-purple-400 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="min-w-[600px] p-10 bg-white rounded-md shadow-md">
        <div className="mb-10 flex justify-around gap-6">
          {steps.map((s) => (
            <StepIndicator
              status={s.status}
              currentStep={currentStep}
              step={s.step}
              title={s.title}
            />
          ))}
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center gap-2">
            {currentStep == 0 ? (
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
            ) : null}
            {currentStep == 1 ? (
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
            ) : null}
            {currentStep == 2 ? (
              <Input
                type="checkbox"
                name="acceptTerms"
                error={formik.errors.acceptTerms}
                onChange={formik.handleChange}
                placeholder="Eu confirmo que li e aceito os termos"
                value={formik.values.confirmPassword}
              />
            ) : null}
            <div className="w-full flex flex-row gap-4 items-center">
              {currentStep > 0 ? (
                <Button
                  text="Voltar"
                  leftIcon={<GoArrowLeft size={22} />}
                  variant="purple"
                  type="button"
                  onClick={handlePreviousStep}
                />
              ) : null}

              {currentStep !== steps.length - 1 ? (
                <Button
                  text="Próximo"
                  rightIcon={<GoArrowRight size={22} />}
                  variant="purple"
                  type="submit"
                />
              ) : (
                <Button
                  text="Finalizar Cadastro"
                  rightIcon={<GoCheck size={22} />}
                  variant="green"
                  type="submit"
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
