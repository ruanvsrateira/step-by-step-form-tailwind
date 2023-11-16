import { useState } from "react";
import { useFormik } from "formik";
import { GoArrowLeft, GoArrowRight, GoCheck } from "react-icons/go";

import { Button } from "./components/Button";
import { StepIndicator } from "./components/StepIndicator";

import { Step0 } from "./sections/Step0";
import { Step1 } from "./sections/Step1";
import { Step2 } from "./sections/Step2";

import { step0ValidationSchema } from "./schemas/step0";
import { step1ValidationSchema } from "./schemas/step1";
import { step2ValidationSchema } from "./schemas/step2";
import { FinishedStep } from "./sections/FinishedStep";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const steps = [
    {
      step: 0,
      title: "Configuração de E-mail",
      validationSchema: step0ValidationSchema,
    },
    {
      step: 1,
      title: "Configuração de senha",
      validationSchema: step1ValidationSchema,
    },
    {
      step: 2,
      title: "Termos de Privacidade",
      validationSchema: step2ValidationSchema,
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
      acceptTerms: false,
    },
    validationSchema: steps[currentStep].validationSchema,
    onSubmit: () => {
      if (currentStep == steps.length - 1) {
        setFormSubmitted(true);
        return;
      }
      return handleNextStep();
    },
    validateOnChange: true,
  });
  const mainStyles = `${
    formSubmitted ? "bg-green-300" : "bg-purple-400"
  } w-[100vw] h-[100vh] flex items-center justify-center transition-colors`;
  return (
    <main className={mainStyles}>
      <div className="min-w-[600px] p-10 bg-white rounded-md shadow-md">
        {!formSubmitted ? (
          <>
            <div className="mb-10 flex justify-around gap-6">
              {steps.map((s) => (
                <StepIndicator
                  key={s.title}
                  currentStep={currentStep}
                  step={s.step}
                  title={s.title}
                />
              ))}
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col items-center gap-2">
                {currentStep == 0 ? <Step0 formik={formik} /> : null}
                {currentStep == 1 ? <Step1 formik={formik} /> : null}
                {currentStep == 2 ? <Step2 formik={formik} /> : null}
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
                      disabled={!formik.isValid}
                    />
                  ) : (
                    <Button
                      text="Finalizar Cadastro"
                      rightIcon={<GoCheck size={22} />}
                      variant="green"
                      type="submit"
                      disabled={!formik.isValid}
                    />
                  )}
                </div>
              </div>
            </form>
          </>
        ) : (
          <FinishedStep />
        )}
      </div>
    </main>
  );
}

export default App;
