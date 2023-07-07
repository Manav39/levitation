import { useEffect } from "react";
import MultiStep from "react-multistep";
import { useNavigate } from "react-router-dom";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from "../components/FormSteps";

const Form = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("AuthToken");
    if (!token) {
      navigate("/error");
    }
  }, []);
  const steps = [
    { name: "Basic Details", component: <StepOne /> },
    { name: "Address", component: <StepTwo /> },
    { name: "File Upload", component: <StepThree /> },
    { name: "MultiFile Upload", component: <StepFour /> },
    { name: "Status", component: <StepFive /> },
  ];
  return (
    <div className="h-screen bg-orange-400">
      <div className="flex justify-center">
        <MultiStep steps={steps} />
      </div>
    </div>
  );
};

export { Form };
