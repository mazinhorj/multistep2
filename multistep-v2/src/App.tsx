// components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// hooks
import { useState } from "react";
import { useForm } from "./hooks/useForm";

// css
import "./App.css";

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [dados, setDados] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setDados((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm dados={dados} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm dados={dados} updateFieldHandler={updateFieldHandler} />,
    <Thanks dados={dados}/>,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h1>Deixe sua avaliação</h1>
        <p>
          Agradecemos sua visita! Utilize o formulário abaixo para avaliar sua
          experiência.
        </p>
      </div>
      <div className="form_container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
