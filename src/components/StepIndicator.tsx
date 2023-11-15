import { GoCheck } from "react-icons/go";

interface StepIndicatorProps {
  step: number;
  title: string;
  currentStep: number;
  status: "not-finalized" | "finalized";
}

export const StepIndicator = ({
  status,
  step,
  title,
  currentStep,
}: StepIndicatorProps) => {
  if (step == currentStep) {
    return (
      <div className="flex flex-col items-center gap-2 text-gray-500">
        <div className="w-10 h-10 bg-purple-400 rounded-[50%] flex items-center justify-center text-white">
          {status == "finalized" ? <GoCheck size={22} /> : step}
        </div>
        <h3 className="text-purple-400 font-medium">{title}</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 text-gray-500">
      <div className="w-10 h-10 border-2 border-purple-400 bg-white rounded-[50%] flex items-center justify-center text-purple-400">
        {step}
      </div>
      <h3 className="text-purple-400">{title}</h3>
    </div>
  );
};
