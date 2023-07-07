import { useState, createContext, useContext } from "react";

interface FormContextProps {
  children: React.ReactNode;
}

interface FormContextValue {
  authToken: string;
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
  ImgFiles: File | null;
  setImgFiles: React.Dispatch<React.SetStateAction<File | null>>;
  ImgArray: File[];
  geoLoc: string;
  setGeoLoc: React.Dispatch<React.SetStateAction<string>>;
}
export interface MyDetails {
  [key: string]: string | File | null;
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

export const FormProvider: React.FC<FormContextProps> = (props) => {
  const [authToken, setAuthToken] = useState<string>("");
  const [ImgFiles, setImgFiles] = useState<File | null>(null);
  const [geoLoc, setGeoLoc] = useState("");
  const ImgArray: File[] = [];
  return (
    <FormContext.Provider
      value={{
        authToken,
        setAuthToken,
        ImgFiles,
        setImgFiles,
        ImgArray,
        geoLoc,
        setGeoLoc,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};
