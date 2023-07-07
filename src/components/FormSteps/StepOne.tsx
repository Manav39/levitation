import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MyDetails } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "../../redux/store";
const StepOne = () => {
  const details = useSelector((state: { details: MyDetails }) => state.details);
  const dispatch = useDispatch();
  // Update the details state
  const handleInputChange = (key: string, value: string) => {
    const updatedDetails: MyDetails = {
      [key]: value,
    };
    dispatch(updateDetails(updatedDetails));
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <p className="font-bold text-2xl text-center mb-4 mt-2">
          Basic Details
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
            value={details.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            value={details.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <PhoneInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            international
            countryCallingCodeEditable={false}
            defaultCountry="IN"
            value={details.phone}
            onChange={(e: string) => handleInputChange("phone", e)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export { StepOne };
