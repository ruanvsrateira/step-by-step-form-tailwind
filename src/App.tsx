import "./App.css";
import { useFormik } from "formik";
import { useState } from "react";
import { object, string } from "yup";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    {
      step: 0,
      title: "Email",
      validationSchema: object({
        email: string().required("campo obrigatorio"),
        confirmEmail: string().required("campo obrigatório"),
      }),
    },
    {
      step: 1,
      title: "Password",
      validationSchema: object({
        password: string().min(4).required("campo obrigatorio"),
      }),
    },
  ];

  function handlePreviousStep() {
    if (currentStep == 0) {
      setCurrentStep(steps.length - 1);
    }

    setCurrentStep((p) => p - 1);
  }

  function handleNextStep() {
    if (currentStep == steps.length - 1) {
      setCurrentStep(0);
    }

    setCurrentStep((p) => p + 1);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmEmail: "",
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
    <main>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {currentStep == 0 ? (
            <>
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
              />
              <input
                name="confirmEmail"
                value={formik.values.confirmEmail}
                onChange={formik.handleChange}
                placeholder="Confirme o E-mail"
              />
            </>
          ) : null}
          {currentStep == 1 ? (
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
            />
          ) : null}

          {currentStep > 0 ? (
            <button onClick={handlePreviousStep}>voltar</button>
          ) : null}
          {currentStep !== steps.length - 1 ? (
            <button type="submit" disabled={!formik.isValid}>
              Próximo
            </button>
          ) : (
            <button type="submit" disabled={!formik.isValid}>
              Finalizar Formulário
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

export default App;
