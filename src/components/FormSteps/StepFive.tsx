import { useSelector } from "react-redux";
import { MyDetails, useForm } from "../../context/context";
import { useEffect, useState } from "react";

const StepFive = () => {
  const details = useSelector((state: { details: MyDetails }) => state.details);
  const context = useForm();
  const [data, setData] = useState([]);
  useEffect(() => {
    const VerifyDetails = async () => {
      const token = localStorage.getItem("AuthToken");
      try {
        const response = await fetch(
          "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: details.username,
              email: details.email,
              phone_number: details.phone,
              address_1: details.address1,
              address_2: details.address2,
              city: details.city,
              state: details.state,
              pincode: details.pincode,
              country: details.country,
              geolocation: context?.geoLoc,
              single_file: context?.ImgFiles,
              multi_ups1: context?.ImgArray[0],
              multi_ups2: context?.ImgArray[1] || null,
              multi_ups3: context?.ImgArray[2] || null,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        await setData(data);
      } catch (error) {
        console.error("Error : ", error);
      }
    };
    VerifyDetails();
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <p className="font-bold text-2xl text-center mb-4 mt-2">Status</p>
        <div className="mb-4">{data?.code}</div>
        <p>{data?.message}</p>
        <p>Payload : {data?.payload?.param}</p>
      </div>
    </div>
  );
};

export { StepFive };
