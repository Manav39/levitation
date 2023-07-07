import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Form } from "./pages/MultiStepForm";
import { FormProvider } from "./context/context";

import "./App.css";
import { Error } from "./pages/404";
import { Forget } from "./pages/Forget";
const App = () => {
  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/error" element={<Error />} />
        <Route path="/forget" element={<Forget />} />
      </Routes>
    </FormProvider>
  );
};

export { App };
