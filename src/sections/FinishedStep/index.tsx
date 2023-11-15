import { GoCheck } from "react-icons/go";

export const FinishedStep = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-20 h-20 bg-green-400 flex items-center justify-center rounded-[50%]">
        <GoCheck size={40} className="text-white" />
      </div>
      <h1 className="text-green-400 text-2xl text-center">
        Parabéns todos os passos do formulário foram respondidos. <br />{" "}
        Cadastro Efetuado com sucesso!
      </h1>
    </div>
  );
};
